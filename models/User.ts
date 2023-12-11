import { InferSchemaType, Schema, model, models } from "mongoose";

const UserSchema = new Schema<UserSchemaInterface>({
	email: {
		type: String,
		unique: true,
		required: true,
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
	},
	password: {
		type: String,
		required: true,
	},
});

export type UserType = InferSchemaType<typeof UserSchema> & { _id: string };

const User = models.User || model("User", UserSchema);

export default User;
