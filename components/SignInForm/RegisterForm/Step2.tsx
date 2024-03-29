import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ErrorAlert, ReqLabel } from "../CustomComponents";

interface props {
	username: string;
	password: string;
	handleChange: UpdateTextField;
	errorMessages: {
		password: ValidationError | null;
		username: ValidationError | null;
		basic: string | null;
	};
}

const SecondStep: React.FC<props> = ({
	handleChange,
	password,
	username,
	errorMessages,
}) => {
	const [showPassword, setShowPassword] = useState(false);
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
				type={showPassword ? "text" : "password"}
				label={<ReqLabel text="Password" />}
				onChange={(ev) => handleChange(ev, "password")}
				value={password}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={() => setShowPassword((prev) => !prev)}
								onMouseDown={(ev) => ev.preventDefault()}
								edge="end"
							>
								{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			{errorMessages.basic ? (
				<ErrorAlert>{errorMessages.basic}</ErrorAlert>
			) : (
				<>
					{errorMessages.username && (
						<ErrorAlert>{errorMessages.username.message}</ErrorAlert>
					)}
					{errorMessages.password && (
						<ErrorAlert>{errorMessages.password.message}</ErrorAlert>
					)}
				</>
			)}
		</>
	);
};

export default SecondStep;
