import React, { useState } from "react";
import PropTypes from "prop-types";
import { SignUp } from "../component/SignUp";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "../../styles/home.scss";

export const Home = () => {
	const [signComp, setSignComp] = useState("hide-comp");
	const [logComp, setLogComp] = useState("show-comp");

	const showComp = e => {
		e.preventDefault();
		setSignComp("show-comp");
		setLogComp("hide-comp");
	};

	const fadeStyle = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { mass: 10, tension: 10, friction: 7 }
	});

	return (
		<div>
			<div className={logComp}>
				<div className="container mt-4 mb-4 h-100">
					<div className="h-100 row align-items-center">
						<animated.div style={fadeStyle} className="login-container col">
							<Form className="p-3">
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" className="log-input" />
									<Form.Text className="text-muted">
										{"We'll never share your email with anyone else."}
									</Form.Text>
								</Form.Group>

								<Form.Group controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" className="log-input" />
									<Form.Text>
										<Link className="text-muted" to="/" onClick={showComp}>
											{"Not a user? Let's get you started."}
										</Link>
									</Form.Text>
								</Form.Group>
								<div className="text-center">
									<Button type="submit" className="w-50 log-btn">
										Log In
									</Button>
								</div>
							</Form>
						</animated.div>
					</div>
				</div>
			</div>
			<div className={signComp}>
				<SignUp />
			</div>
		</div>
	);
};
