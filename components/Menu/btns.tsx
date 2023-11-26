import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const CustomBtn = styled(Button)(({ theme }) => ({
	borderRadius: "var(--rounded-full)",
	whiteSpace: "nowrap",
}));

export const LogInBtn: React.FC<{ handleClick: () => void }> = ({
	handleClick,
}) => {
	return (
		<CustomBtn
			variant="contained"
			color="warning"
			onClick={handleClick}
		>
			Log In
		</CustomBtn>
	);
};
