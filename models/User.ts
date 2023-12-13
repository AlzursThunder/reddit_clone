import sanitize from "mongo-sanitize";
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
