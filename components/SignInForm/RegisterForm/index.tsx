"use client";
import { REGISTERFORM_MSGs } from "@/constants";
import {
	clearAllData,
	updateRegisterData,
} from "@/redux/features/signin-form/signinFormSlice";
import {
	setIsLoggedIn,
	setSessionToken,
} from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { validateRegisterData } from "@/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { batch } from "react-redux";
import { CustomFormButton, CustomTypography } from "../CustomComponents";
import styles from "../SignInForm.module.css";
import SignInTemplate from "../Template";
import FirstStep from "./Step1";
import SecondStep from "./Step2";

interface props {
	setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
	togglePanel: React.Dispatch<React.SetStateAction<boolean>>;
}

type ErrorMessagesState = {
	[key: string]: ValidationError | null | string;
	basic: string | null;
};
const errorMessagesInitialState: ErrorMessagesState = {
	email: null,
	username: null,
	password: null,
	basic: null,
};

const RegisterForm: React.FC<props> = ({ setShowLoginForm, togglePanel }) => {
	const dispatch = useAppDispatch();
	const { email, username, password } = useAppSelector(
		(state) => state.signInForm.registerForm
	);

	const [currStep, setCurrStep] = useState<number>(0);

	const [isDataValid, setIsDataValid] = useState<boolean[]>([false, false]);

	const [errorMessages, setErrorMessages] = useState<ErrorMessagesState>(
		() => errorMessagesInitialState
	);

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleChange: UpdateTextField = (ev, propertyId) => {
		const { id, value } = ev.target;
		dispatch(updateRegisterData({ id: propertyId ? propertyId : id, value }));
		return;
	};

	useEffect(() => {
		setIsDataValid((oldState) => {
			const newState = [...oldState];

			const isValidStep = validateRegisterData(
				{ email, password, username },
				currStep
			);
			newState[currStep] = isValidStep;

			return newState;
		});
	}, [email, username, password]);

	function closeSnackbar(
		event?: React.SyntheticEvent | Event,
		reason?: string
	) {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	}

	return (
		<>
			<SignInTemplate
				header={REGISTERFORM_MSGs[currStep].head}
				announcement={REGISTERFORM_MSGs[currStep].msg}
			>
				{currStep === 0 ? (
					<FirstStep
						email={email}
						handleChange={handleChange}
					>
						<Typography>
							Do you have an account?{" "}
							<CustomTypography onClick={() => setShowLoginForm(true)}>
								Log In
							</CustomTypography>
						</Typography>
					</FirstStep>
				) : currStep === 1 ? (
					<SecondStep
						handleChange={handleChange}
						username={username}
						password={password}
					/>
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
					disabled={!isDataValid[currStep]}
					type={"button"}
					variant="contained"
					color="warning"
					size="large"
					onClick={async () => {
						try {
							if (currStep !== 1) {
								setCurrStep((prev) => ++prev);
								return;
							}

							const res = await axios.post("/api/register", {
								email,
								username,
								password,
							});
							console.log(res);

							// reset erorr messages to initial state
							if (res.status === 200) {
								setErrorMessages(errorMessagesInitialState);
								setOpenSnackbar(true);
								togglePanel(false)
							}

							batch(() => {
								dispatch(setIsLoggedIn(true));
								dispatch(setSessionToken(res.data.sessionToken));
								dispatch(clearAllData());
							});

							setIsDataValid(() => [false, false]);
							setCurrStep(0);

							return;
						} catch (error: any) {
							console.error(error);

							if (error.response.data.name === "ValidationError") {
								const { errors } = error.response
									.data as UserSchema_ValidationError;
								setErrorMessages((prev) => ({
									...prev,
									...errors,
								}));
								return;
							}

							setErrorMessages((prevState) => ({
								...prevState,
								basic: "Sorry something went wrong. Please try again.",
							}));

							return;
						}
					}}
				>
					<Typography>{currStep === 1 ? "Sign Up" : "Next"}</Typography>
				</CustomFormButton>
			</Stack>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={10000}
				onClose={closeSnackbar}
			>
				<Alert
					onClose={closeSnackbar}
					severity="success"
					sx={{ width: "100%" }}
				>
					Account created successfully!
				</Alert>
			</Snackbar>
		</>
	);
};

export default RegisterForm;
