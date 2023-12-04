import TextField from "@mui/material/TextField";
import React from "react";
import { CustomLink, ReqLabel } from "../CustomComponents";

interface props {
	email: string;
	handleChange: UpdateTextField;
	children: React.ReactNode;
}

const FirstStep: React.FC<props> = ({ email, handleChange, children }) => {
	return (
		<>
			<TextField
				type="text"
				value={email}
				label={<ReqLabel text="Email" />}
				onChange={(ev) => handleChange(ev, "email")}
				autoComplete="off"
			/>
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
