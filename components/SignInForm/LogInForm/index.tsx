import { LOGINFORM_MSGs } from "@/constants";
import { useAppSelector } from "@/redux/hooks";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { CustomLink, CustomTypography, ReqLabel } from "../CustomComponents";
import styles from "../SignInForm.module.css";
import SignInTemplate from "../Template";

interface props {
	setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInForm: React.FC<props> = ({ setShowLoginForm }) => {
	const { password, username } = useAppSelector(
		(state) => state.signInForm.logInForm
	);

	return (
		<>
			<SignInTemplate
				header={LOGINFORM_MSGs.head}
				announcement={LOGINFORM_MSGs.msg}
			>
				<TextField
					value={username}
					type="text"
					onChange={() => {}}
					label={<ReqLabel text="Username" />}
				/>
				<TextField
					value={password}
					type="password"
					onChange={() => {}}
					label={<ReqLabel text="Password" />}
				/>
				<Typography>
					Don't have an account?{" "}
					<CustomTypography onClick={() => setShowLoginForm(false)}>Sign Up</CustomTypography>
				</Typography>
				<CustomLink
					href="/placeholder-accounts"
					target="_blank"
				>
					List of placeholder accounts.
				</CustomLink>
			</SignInTemplate>
			<Box className={styles.btnBox}>
				<Button
					type={"submit"}
					variant="contained"
					color="warning"
					size="large"
					sx={{
						borderRadius: "var(--rounded-full)",
						width: "100%",
					}}
				>
					Log In
				</Button>
			</Box>
		</>
	);
};

export default LogInForm;
