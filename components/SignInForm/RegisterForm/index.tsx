"use client";
import { REGISTERFORM_MSGs } from "@/constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { CustomFormButton, CustomTypography } from "../CustomComponents";
import styles from "../SignInForm.module.css";
import SignInTemplate from "../Template";

interface props {
	setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: React.FC<props> = ({ setShowLoginForm }) => {
	const [currStep, setCurrStep] = useState<number>(0);

	return (
		<>
			<SignInTemplate
				header={REGISTERFORM_MSGs[currStep].head}
				announcement={REGISTERFORM_MSGs[currStep].msg}
			>
				{currStep === 0 ? (
					<>
						"First Step"
						<Typography>
							Do you have an account?{" "}
							<CustomTypography onClick={() => setShowLoginForm(true)}>
								Log In
							</CustomTypography>
						</Typography>
					</>
				) : currStep === 1 ? (
					<>"Second Step"</>
				) : (
					<span>Sorry something went wrong. Please try again.</span>
				)}
			</SignInTemplate>
			<Stack
				className={styles.btnBox}
				direction={"row"}
				gap={2}
			>
				{currStep !== 0 && (
					<Tooltip title={"Back"}>
						<IconButton
							onClick={() => {
								if (currStep > 0) setCurrStep((prev) => --prev);
								return;
							}}
						>
							<ArrowBackIcon />
						</IconButton>
					</Tooltip>
				)}
				<CustomFormButton
					type={"button"}
					variant="contained"
					color="warning"
					size="large"
					onClick={async (ev) => {
						try {
							if (currStep !== 1) {
								setCurrStep((prev) => ++prev);
								return;
							}
						} catch (error) {
							console.error(error);
						}
					}}
				>
					<Typography>{currStep === 1 ? "Sign Up" : "Next"}</Typography>
				</CustomFormButton>
			</Stack>
		</>
	);
};

export default RegisterForm;
