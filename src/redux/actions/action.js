import {
	GET_LAYOUT,
	FILTER_SEARCH,
	SORT_BY_NAME,
	SORT_BY_CREATION,
} from "../constants/types";

export const getlayout = (layout) => {
	return {
		type: GET_LAYOUT,
		payload: layout,
	};
};

export const filterSearch = (payload) => {
	return {
		type: FILTER_SEARCH,
		payload,
	};
};

export const sortByName = (payload) => {
	return {
		type: SORT_BY_NAME,
		payload,
	};
};

export const sortByCreation = (payload) => {
	return {
		type: SORT_BY_CREATION,
		payload,
	};
};
