import React, { useEffect } from "react";
import "./login.style.scss";
//form set up
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInputComponent from "../../components/text-input/text-input.component";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { processLogin } from "../../redux/action/login.action";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email cannot be empty")
		.email("Please enter a valid email"),
	password: yup
		.string()
		.required("Password cannot be empty")
		.min(8, "Password must be atleast 8 letters"),
});

function LoginPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { token } = useSelector((state) => state.company);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {},
		mode: "onSubmit",
		resolver: yupResolver(loginSchema),
	});
	const _saveData = (data) => {
		dispatch(processLogin(data));
	};
	useEffect(() => {
		if (token !== "") {
			navigate("/dashboard");
		}
	}, [token, navigate]);

	useEffect(() => {
		let isAuth = localStorage.getItem("token");
		if (isAuth) {
			navigate("/dashboard");
		}
	}, [navigate]);
	return (
		<div className="login-wrapper">
			<div className="login-container">
				<div className="login-form-container">
					<h2 className="login-title-message">Welcome,</h2>
					<label className="login-subtitle-message">Sign In to continue</label>
					<Form>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<TextInputComponent
									label="Email"
									placeholder="Enter Email Address"
									type="email"
									field={field}
									error={errors?.email?.message}
								/>
							)}
						/>
						<Controller
							name="password"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<TextInputComponent
									label="Password"
									placeholder="Enter Password"
									type="password"
									field={field}
									error={errors?.password?.message}
								/>
							)}
						/>
						<Button
							onClick={handleSubmit(_saveData)}
							className="button-primary"
							type="submit"
						>
							SIGN IN
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
