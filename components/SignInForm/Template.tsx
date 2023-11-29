import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./SignInForm.module.css";
import { TextFieldThemeProvider } from "./ThemesProviders";

interface props {
	header: string;
	announcement: string;
	children: React.ReactNode;
}

const SignInTemplate: React.FC<props> = ({
	children,
	header,
	announcement,
}) => {
	return (
		<TextFieldThemeProvider>
			<div className={styles.template}>
				<Typography
					variant="h5"
					fontWeight={"bold"}
				>
					{header}
				</Typography>
				<Typography variant="body2">{announcement}</Typography>
				<Stack spacing={3}>{children}</Stack>
			</div>
		</TextFieldThemeProvider>
	);
};

export default SignInTemplate;
