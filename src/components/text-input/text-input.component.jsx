import React from "react";
import Form from "react-bootstrap/Form";

function TextInputComponent(props) {
	return (
		<Form.Group className="mb-3">
			<Form.Label>{props.label}</Form.Label>
			<Form.Control {...props} {...props.field} />
			{props.error && (
				<Form.Text className="text-muted">{props.error}</Form.Text>
			)}
		</Form.Group>
	);
}

export default TextInputComponent;
