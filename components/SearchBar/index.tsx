"use client";
import {
	clearSearchPhrase,
	updateSearchPhrase,
} from "@/redux/features/search-input/searchInputSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
	const dispatch = useAppDispatch();
	const pathname = usePathname();
	const input = useRef<HTMLInputElement | null>(null);
	const { searchPhrase } = useAppSelector((state) => state.searchInput);
	async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
		try {
			ev.preventDefault();
		} catch (error) {
			console.error(error);
			return;
		}
	}

	if (pathname === "/placeholder-accounts")
		return <div className={styles.container}></div>;

	return (
		<div className={styles.container}>
			<form
				action="get"
				onSubmit={handleSubmit}
				className={styles.form}
			>
				<div
					className={styles.inputContainer}
					onClick={() => {
						if (input.current) {
							input.current.focus();
						}
					}}
				>
					<SearchIcon />
					<input
						type="text"
						className={styles.input}
						value={searchPhrase}
						onChange={(ev) => {
							const { value } = ev.target;
							dispatch(updateSearchPhrase(value));
							return;
						}}
						placeholder="Search"
						ref={input}
					/>
					{searchPhrase && (
						<Tooltip
							title="Clear"
							placement="bottom"
						>
							<IconButton
								aria-label="delete"
								className={styles.clearIcon}
								onClick={() => dispatch(clearSearchPhrase())}
							>
								<ClearIcon />
							</IconButton>
						</Tooltip>
					)}
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
