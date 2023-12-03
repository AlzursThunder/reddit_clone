import { LOGINFORM_MSGs } from "@/constants";
import { updateLogInData } from "@/redux/features/signin-form/signinFormSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { validateLogInData } from "@/utils";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import {
	CustomFormButton,
	CustomLink,
	CustomTypography,
	ReqLabel,
} from "../CustomComponents";
import styles from "../SignInForm.module.css";
import SignInTemplate from "../Template";

interface props {
	setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInForm: React.FC<props> = ({ setShowLoginForm }) => {
	const dispatch = useAppDispatch();
	const { password, username } = useAppSelector(
		(state) => state.signInForm.logInForm
	);

	const [isDataValid, setIsDataValid] = useState(false);

	const handleChange: UpdateTextField = (ev, propertyId) => {
		const { id, value } = ev.target;
		dispatch(updateLogInData({ id: propertyId ? propertyId : id, value }));
		return;
	};

	useEffect(() => {
		setIsDataValid(() => validateLogInData({ password, username }));
	}, [password, username]);

	return (
		<>
			<SignInTemplate
				header={LOGINFORM_MSGs.head}
				announcement={LOGINFORM_MSGs.msg}
			>
				<TextField
					value={username}
					type="text"
					onChange={(ev) => handleChange(ev, "username")}
					label={<ReqLabel text="Username" />}
				/>
				<TextField
					value={password}
					type="password"
					onChange={(ev) => handleChange(ev, "password")}
					label={<ReqLabel text="Password" />}
				/>
				<Typography>
					Don't have an account?{" "}
					<CustomTypography onClick={() => setShowLoginForm(false)}>
						Sign Up
					</CustomTypography>
				</Typography>
				<CustomLink
					href="/placeholder-accounts"
					target="_blank"
				>
					List of placeholder accounts.
				</CustomLink>
			</SignInTemplate>
			<Box className={styles.btnBox}>
				<CustomFormButton
					type={"button"}
					variant="contained"
					disabled={!isDataValid}
					color="warning"
					size="large"
				>
					Log In
				</CustomFormButton>
			</Box>
		</>
	);
};

export default LogInForm;
