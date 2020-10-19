import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/crm">
						<button className="btn btn-primary">CRM</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/add">
						<button className="btn btn-primary">Add Contact</button>
					</Link>
				</div>
			</nav>
		);
	}
}
