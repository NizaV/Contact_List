import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

export const SignUp = () => {
	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className="container mt-4 mb-4 h-100">
			<div className="h-100 row align-items-center">
				<div className="login-container col">
					<Form className="p-3">
						<Form.Group controlId="formBasicPassword">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="First Name" className="log-input" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Last Name" className="log-input" />
						</Form.Group>

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
								<Link className="text-muted" to="/" onClick={refreshPage}>
									{"Jk, I'm already signed up."}
								</Link>
							</Form.Text>
						</Form.Group>
						<div className="text-center">
							<Button type="submit" className="w-50 log-btn">
								Sign Up
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

SignUp.propTypes = {};

// export const LogIn = () => {
// 	// const {showComp, setShowComp} = useState("sign-component")
// 	return (
// 		<div className="container mt-4 mb-4 h-100">
// 			<div className="h-100 row align-items-center">
// 				<div className="login-container col">
// 					<Form className="p-3">
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Label>Email address</Form.Label>
// 							<Form.Control type="email" placeholder="Enter email" className="log-input" />
// 							<Form.Text className="text-muted">
// 								{"We'll never share your email with anyone else."}
// 							</Form.Text>
// 						</Form.Group>

// 						<Form.Group controlId="formBasicPassword">
// 							<Form.Label>Password</Form.Label>
// 							<Form.Control type="password" placeholder="Password" className="log-input" />
// 							<Form.Text>
// 								<Link className="text-muted" to="/">
// 									{"Not a user? Let's get you started."}
// 								</Link>
// 							</Form.Text>
// 						</Form.Group>
// 						<div className="text-center">
// 							<Button type="submit" className="w-50 log-btn">
// 								Log In
// 							</Button>
// 						</div>
// 					</Form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
