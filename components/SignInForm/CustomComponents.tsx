import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const styles = {
	"&:hover": {
		textDecoration: "underline",
	},
};

export const CustomContainer = styled(Container)(({ theme }) => ({
	padding: "0",
}));

export const CustomTypography = styled("span")(({ theme }) => ({
	cursor: "pointer",
	color: theme.palette.primary.dark,
	...styles,
}));

export const CustomLink = styled(Link)(({ theme }) => ({
	color: theme.palette.primary.dark,
	...styles,
}));

export const CustomFormButton = styled(Button)(({ theme }) => ({
	borderRadius: "var(--rounded-full)",
	width: "100%",
}));

export const ReqLabel: React.FC<{ text: string }> = ({ text }) => (
	<Typography>
		{text}
		<span style={{ color: "var(--red-700)" }}>*</span>
	</Typography>
);
