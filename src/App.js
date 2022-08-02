import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "./login/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";
import EmployeeData from "./dashboard/pages/EmployeeData";
import ParkingLog from "./dashboard/pages/ParkingLog";
import Logout from "./dashboard/pages/Logout";

function App() {
	return (
		// <Router>
		// 	<Route path="/" exact>
		// 		<Login />
		// 	</Route>
		// </Router>

		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>

				<ProtectedRoute
					exact
					path="/dashboard"
					component={Dashboard}
				/>
				<ProtectedRoute
					exact
					path="/employee-data"
					component={EmployeeData}
				/>
				<ProtectedRoute
					exact
					path="/parking-log"
					component={ParkingLog}
				/>
				<ProtectedRoute
					exact
					path="/logout"
					component={Logout}
				/>

				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;