import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navfoot.scss";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bgstyle mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/crm">
						<button className="btn btn-outline-light">CRM</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn btn-outline-light">Add Contact</button>
					</Link>
				</div>
			</nav>
		);
	}
}
