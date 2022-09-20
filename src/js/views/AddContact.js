import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/addEdit-contact.scss";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [status, setStatus] = useState("");
	return (
		<div className="container">
			<div className="mb-4">
				<h1 className="text-center mt-5 font-weight-bold">{"Add Contact"}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={event => setName(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={event => setEmail(event.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={event => setPhone(event.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={event => setAddress(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<div className="form-group">
						<label>Status</label>
						<input
							onChange={event => setStatus(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter Status: In Process, In Contact, Won, Loss"
						/>
					</div>
					<button
						onClick={() => actions.addContact(name, email, address, phone, status, props.history)}
						type="button"
						className="btn btn-info form-control btn-style mb-3">
						Save
					</button>
					<Link className="w-100 text-center text-info" to="/">
						Back to Contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	history: PropTypes.object
};
