import {
	FILTER_SEARCH,
	SORT_BY_NAME,
	SORT_BY_CREATION,
	SELECT_FAVOURITE,
} from "../constants/types";

export const filterSearch = (payload) => {
	return {
		type: FILTER_SEARCH,
		payload,
	};
};

export const selectFavourite = (data) => {
	return {
		type: SELECT_FAVOURITE,
		payload: data,
	};
};

export const sortByName = () => {
	return {
		type: SORT_BY_NAME,
	};
};

export const sortByCreation = () => {
	return {
		type: SORT_BY_CREATION,
	};
};
