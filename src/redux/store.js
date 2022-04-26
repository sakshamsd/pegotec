import { createStore, combineReducers, applyMiddleware } from "redux";

import loginReducer from "./reducer/login.reducer";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import companyReducer from "./reducer/company.reducer";

const rootReducer = combineReducers({
	login: loginReducer,
	company: companyReducer,
});

let middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
	const logger = createLogger();
	middleware = [...middleware, logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
