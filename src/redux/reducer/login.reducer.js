import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
let initial_state = {
	isLoading: false,
	token: "",
};
export default function loginReducer(state = initial_state, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload);
			localStorage.setItem("status", true);
			return {
				isLoading: false,
				token: action.payload,
			};

		default:
			return state;
	}
}
