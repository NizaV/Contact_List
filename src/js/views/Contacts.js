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
			<div>
				<div className="d-flex flex-row">
					<h1>Contacts</h1>
				</div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
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
				text="Warning: Dont do it"
				contactId={state.id}
				onClose={() => setState({ showModal: false })}
			/>
		</div>
	);
};
