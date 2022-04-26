import axios from "axios";
import {
	GET_COUNTRY_REQUEST,
	GET_COUNTRY_SUCCESS,
	ADD_COMPANY_SUCCESS,
} from "../actionTypes";

const getCountryRequest = () => {
	return {
		type: GET_COUNTRY_REQUEST,
	};
};

const getCountrySuccess = (countriesList) => {
	return {
		type: GET_COUNTRY_SUCCESS,
		payload: countriesList,
	};
};

const addCompanySuccess = (countriesList) => {
	return {
		type: ADD_COMPANY_SUCCESS,
		payload: countriesList,
	};
};

export const getCountries = () => {
	return (dispatch) => {
		dispatch(getCountryRequest());
		let countriesList = [];
		axios
			.get("https://restcountries.com/v3.1/subregion/asia")
			.then((response) => {
				response.data.map((c) => {
					countriesList.push({ id: c.name.common, value: c.name.common });
					return 0;
				});

				dispatch(getCountrySuccess(countriesList));
			})
			.catch(() => {});
	};
};

export const saveCompany = (company) => {
	return (dispatch) => {
		dispatch(addCompanySuccess(company));
	};
};
