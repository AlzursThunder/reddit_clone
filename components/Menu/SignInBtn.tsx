"use client";
import { setUserId } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SignInForm from "../SignInForm";
import { LoadingBtn, LogInBtn, SignOutBtn } from "./btns";

const SignInBtn: React.FC = () => {
	const dispatch = useAppDispatch();
	// determines if sign up form should be displayed
	const [openPanel, setOpenPanel] = useState(false);

	const { userId } = useAppSelector((state) => state.user);
	const { data, isLoading } = useQuery({
		enabled: typeof userId === "string",
		queryKey: ["user", userId],
		queryFn: async () => {
			try {
				return "";
			} catch (error) {
				console.error(error);
				return null;
			}
		},
	});

	useEffect(() => {
		dispatch(setUserId(nanoid(64)));
	}, [dispatch]);

	return (
		<div>
			{isLoading ? (
				<LoadingBtn />
			) : data ? (
				<SignOutBtn handleClick={() => {}} />
			) : (
				<LogInBtn handleClick={() => setOpenPanel(true)} />
			)}
			{openPanel && (
				<SignInForm
					openPanel={openPanel}
					togglePanel={setOpenPanel}
				/>
			)}
		</div>
	);
};

export default SignInBtn;
