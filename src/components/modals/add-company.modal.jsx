import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInputComponent from "../../components/text-input/text-input.component";
import SelectInputComponent from "../select-input/select-input.component";
import TextareaInputComponent from "../textarea-input/textarea-input.component";
import { saveCompany } from "../../redux/action/company.action";

const companySchema = yup.object().shape({
	company_name: yup.string().required("Email cannot be empty"),
	company_email: yup
		.string()
		.required("Email cannot be empty")
		.email("Please enter a valid email"),
	company_address: yup.string().required("Address cannot be empty"),
	company_phone: yup.string().required("Phone cannot be empty"),
	company_country: yup.string().required("Country cannot be empty"),
});

function AddCompanyModal({ handleClose, show }) {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {},
		mode: "onSubmit",
		resolver: yupResolver(companySchema),
	});

	const { countriesList } = useSelector((state) => state.company);

	const _saveData = (data) => {
		dispatch(saveCompany(data));
		handleClose();
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Company</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Controller
						name="company_name"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInputComponent
								label="Company Name"
								placeholder="Enter Company Name"
								type="text"
								field={field}
								error={errors?.company_name?.message}
							/>
						)}
					/>

					<Controller
						name="company_email"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInputComponent
								label="Company Email"
								placeholder="Enter Company Email"
								type="text"
								field={field}
								error={errors?.company_email?.message}
							/>
						)}
					/>

					<Controller
						name="company_address"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInputComponent
								label="Company Address"
								placeholder="Enter Company Address"
								type="text"
								field={field}
								error={errors?.company_address?.message}
							/>
						)}
					/>

					<Controller
						name="company_phone"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInputComponent
								label="Company Phone"
								placeholder="Enter Company Phone"
								type="text"
								field={field}
								error={errors?.company_phone?.message}
							/>
						)}
					/>
					<Controller
						name="company_country"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<SelectInputComponent
								label="Company Country"
								placeholder="Enter Company Country"
								list={countriesList}
								field={field}
								error={errors?.company_country?.message}
							/>
						)}
					/>

					<Controller
						name="dob"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextInputComponent
								label="Company DOB"
								placeholder="Enter Company DOB"
								type="date"
								field={field}
							/>
						)}
					/>
					<Controller
						name="details"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextareaInputComponent
								label="Company Detail"
								placeholder="Enter Company Details"
								type="details"
								field={field}
								maxLength="300"
								rows={3}
							/>
						)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleSubmit(_saveData)}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddCompanyModal;
