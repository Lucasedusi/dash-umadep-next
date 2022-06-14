import { useQuery } from "react-query";
import { api } from "../api";

type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

type GetUsersResponse = {
	totalCount: number;
	users: User[];
};

async function getUsers(page: number): Promise<GetUsersResponse> {
	const { data, headers } = await api.get("users", {
		params: {
			page,
		},
	});

	const totalCount = Number(headers["x-total-count"]);

	const users = data.map((user) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			password: user.password,
		};
	});

	return { users, totalCount };
}

export function useUsers(page: number) {
	return useQuery(["users", page], () => getUsers(page));
}