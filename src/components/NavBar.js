import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Links from "./Links";

export default class NavBar extends React.Component {
	state = {
		isOpen: false
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} alt="Beach Resort" />
						</Link>
						<button
							type="button"
							className="nav-btn"
							onClick={this.handleToggle}
						>
							{this.state.isOpen ? (
								<FaAlignRight className="nav-icon" />
							) : (
								<IoIosClose className="nav-icon" />
							)}
						</button>
					</div>
					<Links isOpen />
				</div>
			</nav>
		);
	}
}
