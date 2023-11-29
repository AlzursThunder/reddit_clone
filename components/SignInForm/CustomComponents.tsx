import { styled } from "@mui/material";
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

export const ReqLabel: React.FC<{ text: string }> = ({ text }) => (
	<Typography>
		{text}
		<span style={{ color: "var(--red-700)" }}>*</span>
	</Typography>
);
