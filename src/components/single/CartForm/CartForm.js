import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CartForm.css";

export const CartForm = ({ submitOrder }) => {
	const userFormData = (e) => {
		let userData = {};
		for (let index = 0; index < e.target.length - 1; index++) {
			userData = { ...userData, [e.target[index].id]: e.target[index].value };
		}
		submitOrder(userData);
	};

	return (
		<Form
			className="CartForm"
			onSubmit={(e) => {
				e.preventDefault();
				userFormData(e);
			}}
		>
			<Row className="mb-3">
				<Form.Label>Personal information</Form.Label>
				<Form.Group as={Col} controlId="firstName">
					<Form.Control placeholder="Enter first name" required />
				</Form.Group>
				<Form.Group as={Col} controlId="lastName">
					<Form.Control placeholder="Enter last name" required />
				</Form.Group>
				<Form.Group as={Col} controlId="idNumber">
					<Form.Control type="tel" placeholder="Enter ID number" required />
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group className="col-6" controlId="phoneNumber">
					<Form.Control type="tel" placeholder="Enter phone number" required />
				</Form.Group>
				<Form.Group className="col-6" controlId="emailAddress">
					<Form.Control
						type="email"
						placeholder="Enter email address"
						required
					/>
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Label>Shipping address</Form.Label>
				<Form.Group as={Col} controlId="addressLine1">
					<Form.Control placeholder="Address Line 1" required />
				</Form.Group>
				<Form.Group as={Col} controlId="addressLine2">
					<Form.Control placeholder="Address Line 2" />
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} controlId="shippingCity">
					<Form.Control placeholder="City" required />
				</Form.Group>
				<Form.Group as={Col} controlId="shippingState">
					<Form.Control placeholder="State" required />
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group className="col-6" controlId="shippingCountry">
					<Form.Control placeholder="Country" required />
				</Form.Group>
			</Row>
			{/* <Button type="submit">Place order</Button> */}
		</Form>
	);
};
