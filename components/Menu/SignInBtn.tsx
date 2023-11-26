"use client";
import React, { useState } from "react";
import { LogInBtn } from "./btns";

const SignInBtn: React.FC = () => {
	// determines if sign up form should be displayed
	const [openPanel, setOpenPanel] = useState(false);

	return (
		<div>
			<LogInBtn handleClick={() => setOpenPanel(true)} />
			{openPanel && <div>SignInForm</div>}
		</div>
	);
};

export default SignInBtn;
