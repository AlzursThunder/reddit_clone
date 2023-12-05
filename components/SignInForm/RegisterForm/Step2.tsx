import TextField from "@mui/material/TextField";
import React from "react";
import { ReqLabel } from "../CustomComponents";

interface props {
	username: string;
	password: string;
	handleChange: UpdateTextField;
}

const SecondeStep: React.FC<props> = ({ handleChange, password, username }) => {
	return (
		<>
			<TextField
				type="text"
				label={<ReqLabel text="Username" />}
				autoComplete="off"
				value={username}
				onChange={(ev) => handleChange(ev, "username")}
			/>
			<TextField
				type={"password"}
				label={<ReqLabel text="Password" />}
				onChange={(ev) => handleChange(ev, "password")}
				value={password}
			/>
		</>
	);
};

export default SecondeStep;
