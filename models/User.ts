import { validateUserSchema } from "@/utils";
import sanitize from "mongo-sanitize";
import { InferSchemaType, Schema, model, models } from "mongoose";

const UserSchema = new Schema<UserSchemaInterface>({
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: async function (value: string) {
				const isValid = validateUserSchema("email", value);
				// check if email exists
				if (isValid && (await User.exists({ email: value }))) return false;

				return isValid;
			},
			message: `Invalid email format or email already in use.`,
		},
	},
	emailPrefix: {
		type: String,
		unique: true,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: async function (value: string) {
				const isValid = validateUserSchema("username", value);
				// check if username exists
				if (isValid && (await User.exists({ username: value }))) return false;

				return isValid;
			},
			message: `Username is invalid or taken.`,
		},
	},
	password: {
		type: String,
		required: true,
	},
});

UserSchema.pre("save", function (next) {
	// sanitize data using mongo-sanitize
	this.username = sanitize(this.username);
	this.email = sanitize(this.email);
	this.emailPrefix = sanitize(this.emailPrefix);

	next();
});

export type UserType = InferSchemaType<typeof UserSchema> & { _id: string };

const User = models.User || model("User", UserSchema);

export default User;
