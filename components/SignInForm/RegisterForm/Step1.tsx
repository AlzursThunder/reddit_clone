import TextField from "@mui/material/TextField";
import React from "react";
import { CustomLink, ErrorAlert, ReqLabel } from "../CustomComponents";

interface props {
	email: string;
	handleChange: UpdateTextField;
	children: React.ReactNode;
	errorMessages: {
		email: ValidationError | null;
	};
}

const FirstStep: React.FC<props> = ({
	email,
	handleChange,
	children,
	errorMessages,
}) => {
	return (
		<>
			<TextField
				type="text"
				value={email}
				label={<ReqLabel text="Email" />}
				inputProps={{
					"data-testid": "step1-input-email",
				}}
				onChange={(ev) => handleChange(ev, "email")}
				autoComplete="off"
			/>
			<ErrorAlert data-testid="error-email">
				{errorMessages.email && errorMessages.email.message}
			</ErrorAlert>
			{children}
			<div>
				<CustomLink
					href="/placeholder-accounts"
					target="_blank"
				>
					List of placeholder accounts.
				</CustomLink>
			</div>
		</>
	);
};

export default FirstStep;
