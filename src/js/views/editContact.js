import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/addEdit-contact.scss";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [status, setStatus] = useState("");
	useEffect(() => {
		for (let contact of store.contacts) {
			if (props.match.params.contactId == contact.id) {
				setName(contact.full_name);
				setEmail(contact.email);
				setPhone(contact.phone);
				setAddress(contact.address);
				setStatus(contact.status);
			}
		}
	}, [store.contacts, props.match.params.contactId]);
	return (
		<div className="container">
			<div className="mb-4">
				<h1 className="text-center mt-5 font-weight-bold">{"Edit Contact"}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={event => setName(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={event => setEmail(event.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={event => setPhone(event.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={event => setAddress(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
						/>
					</div>
					<div className="form-group">
						<label>Status</label>
						<input
							onChange={event => setStatus(event.target.value)}
							type="text"
							className="form-control"
							placeholder="Change Status"
							value={status}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							onClick={() =>
								actions.editContact(name, email, address, phone, status, props.match.params.contactId)
							}
							type="button"
							className="btn btn-info form-control btn-style mb-3">
							Save
						</button>
					</Link>
					<Link className="w-100 text-center text-info" to="/">
						Back to Contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
