import { GET_USERS } from "../constants/types";
import { contacts } from "../../utils/data";

const intialState = {
	isLoading: false,
	data: contacts,
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				isLoading: true,
			};

		default:
			return state;
	}
};

export default reducer;
