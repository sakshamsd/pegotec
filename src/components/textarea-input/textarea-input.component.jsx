import React from "react";
import { Form } from "react-bootstrap";

function TextareaInputComponent(props) {
	return (
		<Form.Group className="mb-3">
			<Form.Label>{props.label}</Form.Label>
			<Form.Control as="textarea" {...props} {...props.field} />
		</Form.Group>
	);
}

export default TextareaInputComponent;
