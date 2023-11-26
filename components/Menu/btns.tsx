import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const CustomBtn = styled(Button)(({ theme }) => ({
	borderRadius: "var(--rounded-full)",
	whiteSpace: "nowrap",
}));
