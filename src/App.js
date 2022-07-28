import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";

import EmployeeData from "./dashboard/pages/EmployeeData"
import ParkingLog from "./dashboard/pages/ParkingLog";

function App() {
	return (
		<Router>
			<Switch>
				

				<Route
					exact
					path="/employee-data"
					component={EmployeeData}
				/>
				<Route
					exact
					path="/parking-log"
					component={ParkingLog}
				/>
				
				
				
				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;