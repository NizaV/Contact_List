import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/crm.scss";

export const CustManage = props => {
	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-between">
				<div className=" column">
					<h3 className="border-bottom border-dark text-center">In Process</h3>
					<p>Some text..</p>
				</div>
				<div className=" column">
					<h3 className="border-bottom border-dark text-center">In Contact</h3>
					<p>Some text..</p>
				</div>
				<div className=" column">
					<h3 className="border-bottom border-dark text-center">Won</h3>
					<p>Some text..</p>
				</div>
				<div className=" column">
					<h3 className="border-bottom border-dark text-center">Loss</h3>
					<p>Some text..</p>
				</div>
			</div>
		</div>
	);
};
