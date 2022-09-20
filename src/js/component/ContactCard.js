import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfIcon from "../../img/profile-icon.png";
import { Context } from "../store/appContext";
import "../../styles/contact-card.scss";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item contact-card">
			<div className="row w-100">
				<div className="col-12 col-md-3 px-0 text-center">
					<img
						src={ProfIcon}
						alt="Profile Pic"
						className="rounded-circle mx-auto d-block img-fluid border border-info contact-card_img"
					/>
					<label className="name lead mt-2">{props.full_name}</label>
				</div>
				<div className="col-12 col-md-7 text-center text-sm-left p-4 contact-card_details">
					<div className="row row-cols-2 details-container">
						<div className="col-12 col-md-6 p-3 detail">
							<i className="fas fa-map-marker-alt text-muted mr-3" />
							<span className="text-muted">{props.address}</span>
						</div>
						<div className="col-12 col-md-6 p-3 detail">
							<span
								className="fa fa-phone fa-fw text-muted mr-3"
								data-toggle="tooltip"
								title=""
								data-original-title="(870) 288-4149"
							/>
							<span className="text-muted small">{props.phone}</span>
						</div>
						<div className="col-12 col-md-6 p-3 detail">
							<span
								className="fa fa-envelope fa-fw text-muted mr-3"
								data-toggle="tooltip"
								data-original-title=""
								title=""
							/>
							<span className="text-muted small text-truncate">{props.email}</span>
						</div>
						<div className="col-12 col-md-6 p-3 detail">
							<span
								className="fas fa-spinner text-muted mr-3"
								data-toggle="tooltip"
								data-original-title=""
								title=""
							/>
							<span className="text-muted small text-truncate">{props.status}</span>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-2 d-flex align-items-center contact-card_btn-container">
					<Link to={`/edit/${props.index}/${props.full_name}`} className="text-center w-100">
						<button className="btn contact-card_btn">
							<i className="fas fa-pencil-alt" />
						</button>
					</Link>
					<button className="btn contact-card_btn" onClick={() => props.onDelete()}>
						<i className="fas fa-trash-alt" />
					</button>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	status: PropTypes.string,
	index: PropTypes.number,
	match: PropTypes.object,
	contactId: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
