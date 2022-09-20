import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CrmContactCard } from "../component/crmContactCard.js";
import "../../styles/crm.scss";

export const CustManage = props => {
	const { store, actions } = useContext(Context);
	const [draggedOrder, setDraggedOrder] = useState(null);
	const handleDragStart = useCallback(contact => setDraggedOrder(contact), []);
	const handleDrop = useCallback(
		e => {
			if (e.target.id == "inProcess") {
				actions.updateStatus(
					{
						status: "In Process"
					},
					draggedOrder.id
				);
			} else if (e.target.id == "inContact") {
				actions.updateStatus(
					{
						status: "In Contact"
					},
					draggedOrder.id
				);
			} else if (e.target.id == "aWin") {
				actions.updateStatus(
					{
						status: "Won"
					},
					draggedOrder.id
				);
			} else {
				actions.updateStatus(
					{
						status: "Loss"
					},
					draggedOrder.id
				);
			}
			setDraggedOrder(null);
		},
		[draggedOrder, actions.updateStatus]
	);
	return (
		<div className="crm-container container h-100">
			<div className="d-flex flex-column flex-lg-row justify-content-between h-100">
				<div className="d-flex flex-column column">
					<h3 className=" text-center pt-2 pb-2 mb-1 incontact-col">In Process</h3>

					<div className="overflow-auto">
						<ul
							className="list-group pull-down col-height"
							id="inProcess"
							onDragOver={e => {
								e.preventDefault();
								e.stopPropagation();
							}}
							onDrop={handleDrop}>
							{store.contacts.map((contact, index) => {
								if (contact.status == "In Process") {
									return (
										<div
											key={contact.id}
											draggable
											onDrag={e => {
												e.preventDefault();
												e.stopPropagation();
											}}
											onDragStart={e => handleDragStart(contact)}>
											<CrmContactCard
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
										</div>
									);
								}
							})}
						</ul>
					</div>
				</div>
				<div className="d-flex flex-column column">
					<h3 className=" text-center pt-2 pb-2 mb-1 process-col">In Contact</h3>
					<div className="overflow-auto">
						<ul
							className="list-group pull-down col-height"
							id="inContact"
							onDragOver={e => {
								e.preventDefault();
								e.stopPropagation();
							}}
							onDrop={handleDrop}>
							{store.contacts.map((contact, index) => {
								if (contact.status == "In Contact") {
									return (
										<div
											key={contact.id}
											draggable
											onDrag={e => {
												e.preventDefault();
												e.stopPropagation();
											}}
											onDragStart={e => handleDragStart(contact)}>
											<CrmContactCard
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
										</div>
									);
								}
							})}
						</ul>
					</div>
				</div>
				<div className="d-flex flex-column column">
					<h3 className=" text-center pt-2 pb-2 mb-1 won-col">Won</h3>

					<div className="overflow-auto">
						<ul
							className="list-group pull-down col-height"
							id="aWin"
							onDragOver={e => {
								e.preventDefault();
								e.stopPropagation();
							}}
							onDrop={handleDrop}>
							{store.contacts.map((contact, index) => {
								if (contact.status == "Won") {
									return (
										<div
											key={contact.id}
											draggable
											onDrag={e => {
												e.preventDefault();
												e.stopPropagation();
											}}
											onDragStart={e => handleDragStart(contact)}>
											<CrmContactCard
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
										</div>
									);
								}
							})}
						</ul>
					</div>
				</div>
				<div className="d-flex flex-column column">
					<h3 className=" text-center pt-2 pb-2 mb-1 loss-col">Loss</h3>

					<div className="overflow-auto">
						<ul
							className="list-group pull-down col-height"
							id="aLoss"
							onDragOver={e => {
								e.preventDefault();
								e.stopPropagation();
							}}
							onDrop={handleDrop}>
							{store.contacts.map((contact, index) => {
								if (contact.status == "Loss") {
									return (
										<div
											key={contact.id}
											draggable
											onDrag={e => {
												e.preventDefault();
												e.stopPropagation();
											}}
											onDragStart={e => handleDragStart(contact)}>
											<CrmContactCard
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
										</div>
									);
								}
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
