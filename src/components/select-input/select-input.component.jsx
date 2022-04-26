import React from "react";
import Form from "react-bootstrap/Form";

function SelectInputComponent(props) {
	return (
		<Form.Group className="mb-3">
			<Form.Label>{props.label}</Form.Label>
			<Form.Select aria-label={props.label} {...props} {...props.field}>
				<option value="">--Select--</option>
				{props.list.map((l) => (
					<option value={l.id} key={l.id}>
						{l.value}
					</option>
				))}
			</Form.Select>
			{props.error && (
				<Form.Text className="text-muted">{props.error}</Form.Text>
			)}
		</Form.Group>
	);
}

export default SelectInputComponent;
