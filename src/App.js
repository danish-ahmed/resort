import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import NavBar from "./components/NavBar";
function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/rooms" exact>
					<Rooms />
				</Route>
				<Route path="/rooms/:slug" exact>
					<SingleRoom />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</React.Fragment>
	);
}

export default App;
