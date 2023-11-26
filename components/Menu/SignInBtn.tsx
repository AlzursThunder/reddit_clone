"use client";
import { setUserId } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { LogInBtn } from "./btns";

const SignInBtn: React.FC = () => {
	const dispatch = useAppDispatch();
	// determines if sign up form should be displayed
	const [openPanel, setOpenPanel] = useState(false);

	useEffect(() => {
		dispatch(setUserId(nanoid(64)));
	}, [dispatch]);

	return (
		<div>
			<LogInBtn handleClick={() => setOpenPanel(true)} />
			{openPanel && <div>SignInForm</div>}
		</div>
	);
};

export default SignInBtn;
