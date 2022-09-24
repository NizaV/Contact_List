import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		showModal: false,
		id: null
	});

	return (
		<div className="container">
			<div className="h-100 mb-3">
				<div className="d-flex flex-row">
					<h1 className="mt-3 mb-3 font-weight-bold">Contacts</h1>
				</div>
				<div id="contacts" className="h-100" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, index) => {
							return (
								<ContactCard
									key={index}
									full_name={contact.full_name}
									contactId={contact.id}
									email={contact.email}
									phone={contact.phone}
									address={contact.address}
									status={contact.status}
									index={contact.id}
									onDelete={() => setState({ showModal: true, id: contact.id })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				text="Warning: This is permanent"
				contactId={state.id}
				onClose={() => setState({ showModal: false })}
			/>
		</div>
	);
};
