import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import {ProtectedRoute} from './ProtectedRoute'


import ParkingLog from "./dashboard/pages/ParkingLog";

function App() {
	return (
		<Router>
			<Switch>
				<ProtectedRoute
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