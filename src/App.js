import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import LoginPage from "./pages/login/login.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes.jsx";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" exact element={<LoginPage />} />
						<Route
							path="/dashboard"
							exact
							element={
								<ProtectedRoute>
									<DashboardPage />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
