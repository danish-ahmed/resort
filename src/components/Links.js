import React from "react";
import { Link } from "react-router-dom";

export default function Links(props) {
	const { isOpen } = props;
	return (
		<ul className={!isOpen ? "nav-links show-nav" : "nav-links"}>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/rooms">Rooms</Link>
			</li>
		</ul>
	);
}
