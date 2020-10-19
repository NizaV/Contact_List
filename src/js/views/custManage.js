import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CrmContactCard } from "../component/crmContactCard.js";
import "../../styles/crm.scss";

export const CustManage = props => {
	const { store, actions } = useContext(Context);
	const allowDrop = ev => {
		ev.preventDefault();
	};
	const handleDragOver = ev => {
		ev.dataTransfer.setData("text", ev.target.id);
	};

	const handleDrop = ev => {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.inContact.appendChild(document.getElementById(data));
	};
	return (
		<div className="container uni-height">
			<div className="d-flex flex-row justify-content-between uni-height">
				<div className="d-flex flex-column column">
					<h3 className="border-bottom border-dark text-center pt-2 pb-2 mb-1">In Process</h3>

					<div className="overflow-auto">
						<ul
							className="list-group pull-down"
							id="inProcess"
							onDrop={event => handleDragOver(event)}
							onDragOver={event => allowDrop(event)}>
							{store.contacts.map((contact, index) => {
								return (
									<div key={contact.id} draggable="true" onDragStart={event => handleDragOver(event)}>
										<CrmContactCard
											key={index}
											full_name={contact.full_name}
											contactId={contact.id}
											email={contact.email}
											phone={contact.phone}
											address={contact.address}
											index={contact.id}
											onDelete={() => setState({ showModal: true, id: contact.id })}
										/>
									</div>
								);
							})}
						</ul>
					</div>
				</div>
				<div className=" column">
					<h3 className="border-bottom border-dark text-center pt-2 pb-2 mb-1">In Contact</h3>
					<div className="overflow-auto">
						<ul
							className="list-group pull-down"
							style={{ height: "100%" }}
							id="inContact"
							onDrop={event => handleDragOver(event)}
							onDragOver={event => allowDrop(event)}>
							{store.contacts.map((contact, index) => {
								return <div key={contact.id} draggable="true" onDragStart="drag(event)"></div>;
							})}
						</ul>
					</div>
				</div>
				<div className=" column">
					<h3 className="border border-dark text-center pt-2 pb-2 mb-1 bg-success">Won</h3>
					<p>Some text..</p>
				</div>
				<div className=" column">
					<h3 className="border border-dark text-center pt-2 pb-2 mb-1 bg-danger">Loss</h3>
					<p>Some text..</p>
				</div>
			</div>
		</div>
	);
};
