import {
	GET_COUNTRY_REQUEST,
	GET_COUNTRY_SUCCESS,
	ADD_COMPANY_SUCCESS,
} from "../actionTypes";

let initial_state = {
	isLoading: false,
	companyList: [],
	countriesList: [],
};

export default function companyReducer(state = initial_state, action) {
	switch (action.type) {
		case GET_COUNTRY_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case GET_COUNTRY_SUCCESS:
			return {
				...state,
				isLoading: false,
				countriesList: action.payload,
			};
		case ADD_COMPANY_SUCCESS:
			let list = [...state.companyList];
			list.push(action.payload);
			return {
				...state,
				isLoading: false,
				companyList: list,
			};

		default:
			return state;
	}
}
