interface LogInFormState {
	username: string;
	password: string;
}

interface RegisterFormState {
	email: string;
	username: string;
	password: string;
}

type UpdateTextField = (
	ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	propertyId?: string
) => void;
