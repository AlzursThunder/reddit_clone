"use client";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { CustomContainer } from "./CustomComponents";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";
import styles from "./SignInForm.module.css";

interface props {
	openPanel: boolean;
	togglePanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm: React.FC<props> = ({ togglePanel, openPanel }) => {
	const [showLoginForm, setShowLoginForm] = useState(true);

	return (
		<Backdrop open={openPanel}>
			<CustomContainer
				fixed
				className={styles.formContainer}
			>
				<ClickAwayListener onClickAway={() => togglePanel(false)}>
					<form
						className={styles.formBox}
						method="post"
					>
						{/* top */}
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								marginBottom: "1.5em",
								padding: ".25em .75em",
							}}
						>
							<Tooltip title="Close">
								<IconButton onClick={() => togglePanel(false)}>
									<CloseIcon />
								</IconButton>
							</Tooltip>
						</Box>
						{showLoginForm ? (
							<LogInForm setShowLoginForm={setShowLoginForm} />
						) : (
							<RegisterForm setShowLoginForm={setShowLoginForm} />
						)}
					</form>
				</ClickAwayListener>
			</CustomContainer>
		</Backdrop>
	);
};

export default SignInForm;
