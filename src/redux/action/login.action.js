import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const loginRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};

const loginSuccess = (token) => {
	return {
		type: LOGIN_SUCCESS,
		payload: token,
	};
};

export const processLogin = (loginDetails) => {
	return (dispatch) => {
		dispatch(loginRequest());
		if (
			loginDetails.email === "team@pegotec.net" &&
			loginDetails.password === "12345678"
		) {
			dispatch(loginSuccess("token"));
		} else {
			alert("Wrong Credentials");
		}
	};
};
