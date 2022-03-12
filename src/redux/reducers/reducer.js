import {
	GET_USERS,
	FILTER_SEARCH,
	SORT_BY_NAME,
	SORT_BY_CREATION,
} from "../constants/types";
import { contacts } from "../../utils/data";

const intialState = {
	isLoading: false,
	data: contacts,
	filteredData: contacts,
	layout: "grid",
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				isLoading: true,
			};
		case FILTER_SEARCH: {
			const search = action.payload.search;
			const userContacts = state.data;
			const filteredContacts = state.filteredData;
			console.log(filteredContacts);
			const filteredResults = !search
				? userContacts
				: userContacts.filter((user) => {
						return user.name.toLowerCase().includes(search.toLowerCase());
				  });

			return {
				...state,
				filteredData: filteredResults,
			};
		}
		case SORT_BY_NAME:
			return state;
		case SORT_BY_CREATION:
			return state;
		default:
			return state;
	}
};

export default reducer;
