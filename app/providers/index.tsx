"use client";
import React from "react";
import QueryProvider from "./QueryProvider";
import ReduxProvider from "./ReduxProvider";

const MainProviders: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<QueryProvider>
			<ReduxProvider>{children}</ReduxProvider>
		</QueryProvider>
	);
};

export default MainProviders;
