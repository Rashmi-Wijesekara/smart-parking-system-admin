import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Login from "./login/pages/Login";

function App() {
	return (
		<Router>
			<Route path="/" exact>
				<Login />
			</Route>
		</Router>
	);
}

export default App;