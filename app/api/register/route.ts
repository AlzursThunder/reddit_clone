import User, { UserType } from "@/models/User";
import { connectToDB } from "@/utils";
import bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res: NextResponse) {
	try {
		// connect to database
		await connectToDB();
		const { username, email, password } =
			(await req.json()) as UserSchemaInterface;
		// hash user password
		const hashedPass = await bcryptjs.hash(password, 8);
		// get email prefix
		const emailPrefix = email.split("@")[0];

		// save user to collection
		const user = (await User.create<UserType>({
			email,
			username,
			password: hashedPass,
			emailPrefix,
		})) as UserType;

		// generate token for authentication while user is logged in
		const sessionToken = sign(
			{
				id: user._id,
				username: user.username,
			},
			process.env.JWT_SECRET!,
			{ expiresIn: 1800 }
		);

		return new NextResponse(JSON.stringify({ sessionToken }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		// check if error is mongoose validation error
		if (error instanceof mongoose.Error.ValidationError) {
			const err = {
				name: error.name,
				errors: {
					...error.errors,
				},
				message: error.message,
			};

			return new NextResponse(JSON.stringify(err), {
				status: 422,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new NextResponse(JSON.stringify(error), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

export { handler as POST };
