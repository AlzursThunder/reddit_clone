interface UserSchema_ValidationError {
	message: string;
	name: string;
	errors: {
		[key: string]: ValidationError;
	};
}

interface ValidationError {
	name: string;
	message: string;
	kind: string;
	path: string;
	properties: {
		message: string;
		type: string;
		path: string;
		value?: any;
	};
}
