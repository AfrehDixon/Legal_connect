import axios from "axios";
import React, { Component, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Cookies from "universal-cookie";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState( "" );
	const [isLoggedIn, setisLoggedIn] = useState(false);
	
	const cookies = new Cookies();



	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		console.log(email, password);
		try {
			const response = await axios.post("http://localhost:2000/login", {
				email,
				password,
			});
			const token = response.data.token;
			console.log( token );
			
			cookies.set("token", token, {
				sameSite: "None",
				secure: true,
				maxAge: 86400,
			});

			//  history.push("/");
			navigate("/");
			setisLoggedIn(true);
			// toast.success( "Login Successfull" )
			// alert("Login Successfull");
		} catch (err) {
			alert("Login error");
			// toast.error( "Email and Password incorrect" )
		}
	}

	

	return (
		<div className="auth-wrapper">
			{/* <ToastContainer /> */}
			<div className="auth-inner">
				<form onSubmit={handleSubmit}>
					<h3>Sign In</h3>
					<h3>{/* <Link to={"/admin/home"}>Sign In as Admin</Link> */}</h3>

					<div className="mb-3">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<div className="custom-control custom-checkbox">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customCheck1"
							/>
							<label
								className="custom-control-label pad"
								htmlFor="customCheck1"
							>
								Remember me
							</label>
						</div>
					</div>

					<div className="d-grid">
						<button
							type="submit"
							className="btn btn-primary"
							// onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
					<p className="forgot-password text-right">
						<a href="/sign-up">Sign Up</a>
						{/* <Link to='/signup' >Sign up</Link> */}
					</p>
				</form>
			</div>
		</div>
	);
}
