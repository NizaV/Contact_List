import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";

export const CrmContactCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item crm-card">
			<div className="card" style={{ width: "100%" }}>
				<div>
					<div className="card-body">
						<h5 className="card-title">{props.full_name}</h5>
						<p className="card-text">
							<span
								className="fa fa-phone fa-fw text-muted mr-3"
								data-toggle="tooltip"
								title=""
								data-original-title="(870) 288-4149"
							/>
							<span className="text-muted small">{props.phone}</span>
							<br />
							<span
								className="fa fa-envelope fa-fw text-muted mr-3"
								data-toggle="tooltip"
								data-original-title=""
								title=""
							/>
							<span className="text-muted small text-truncate">{props.email}</span>
						</p>
					</div>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
CrmContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	index: PropTypes.number,
	match: PropTypes.object,
	contactId: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
CrmContactCard.defaultProps = {
	onDelete: null
};
