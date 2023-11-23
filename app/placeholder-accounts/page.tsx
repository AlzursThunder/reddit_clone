"use client";
import { PLACEHOLDER_ACCOUNTS } from "@/constants";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./PlaceholderAccounts.module.css";

const PlaceholderAccounts: React.FC = () => {
	return (
		<Container
			fixed
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography>
				Placeholder accounts. Use them if you don't want to create account.
			</Typography>
			<div>
				<table id={styles.table}>
					<thead>
						<tr>
							<th>Username</th>
							<th>Password</th>
						</tr>
					</thead>
					<tbody>
						{
							PLACEHOLDER_ACCOUNTS.map((acc) => (
								<tr key={acc.userName}>
									<td>{acc.userName}</td>
									<td>{acc.password}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default PlaceholderAccounts;
