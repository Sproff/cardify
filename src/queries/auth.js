import instance from "./axios.config";

export const loadUser = async (body) => {
	const { data } = await instance.get("/", body);

	return data;
};