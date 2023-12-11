import mongoose from "mongoose";

let isConnected = false;

export default async function connectToDB() {
	mongoose.set("strictQuery", true);

	if (isConnected) return;

	try {
		await mongoose.connect(process.env.MONGODB_URI!, {
			dbName: "reddit-clone_DB",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as mongoose.ConnectOptions);

		isConnected = true;
		console.log("Mongo connected");
	} catch (error) {
		console.error(error);
	}
}
