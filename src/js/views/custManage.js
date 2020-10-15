import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/crm.scss";

export const CustManage = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="column">
					<h2>Column 1</h2>
					<p>Some text..</p>
				</div>
				<div className="column">
					<h2>Column 2</h2>
					<p>Some text..</p>
				</div>
				<div className="column">
					<h2>Column 3</h2>
					<p>Some text..</p>
				</div>
				<div className="column">
					<h2>Column 4</h2>
					<p>Some text..</p>
				</div>
			</div>
		</div>
	);
};
