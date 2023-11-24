"use client";
import { useAppSelector } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const { userId } = useAppSelector((state) => state.user);
	const { data, isLoading } = useQuery({
		queryKey: ["user", userId],
	});

	return <div style={{ height: "10000px", width: "100%" }}>Home Page</div>;
}
