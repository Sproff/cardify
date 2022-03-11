import { GET_USERS } from "../constants/types";

export const getUsers = () => {
	return {
		type: GET_USERS,
	};
};
