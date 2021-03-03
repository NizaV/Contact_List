import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="container mt-4 mb-4 h-100">
			<div className="h-100 row align-items-center">
				<div className="login-container col">
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
						</Form.Group>
						<div className="text-center">
							<Button type="submit" className="w-50 log-btn">
								Submit
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};
