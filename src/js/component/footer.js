import React, { Component } from "react";
import "../../styles/navfoot.scss";
import Logo from "../../img/nv-dev-logo-light.png";
import { SiGithub } from "react-icons/si";

export const Footer = () => (
	<footer className="footer d-flex justify-content-center mt-auto py-3 text-center bgstyle">
		<div className="icons">
			<a href="https://nizavera.com">
				<img className="logo" src={Logo} alt="Logo" />
			</a>
		</div>
		<div className="icons">
			<a href="https://github.com/NizaV">
				<SiGithub className="github-icon" />
			</a>
		</div>
	</footer>
);
