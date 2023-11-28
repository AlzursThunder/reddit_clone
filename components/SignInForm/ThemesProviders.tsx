import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const TextFieldTheme: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const theme = createTheme({
		components: {
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderRadius: "15px",
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						display: "flex",
						gap: ".25rem",
					},
				},
			},
			MuiStack: {
				styleOverrides: {
					root: {
						margin: "1.25rem 0",
					},
				},
			},
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { TextFieldTheme as TextFieldThemeProvider };
