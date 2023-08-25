import React, { Component, useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {toast} from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
    // import "react-toastify/dist/ReactToastify.css";

export default function Logup () {
	const [fname, setFname] = useState( "" );
	// const [lname, setLname] = useState( "" );
	const [email, setEmail] = useState( "" );
	const [password, setPassword] = useState( "" );
	const [userType, setUserType] = useState( "" );
	const [secretKey, setSecretKey] = useState( "Dixon" );
	const navigate = useNavigate()

	 async function handleSubmit ( e ) {
		//  if ( userType == "Admin" && secretKey != "Dixon" ) {
		// 	 e.preventDefault();
		// 	 alert( "Invalid Admin" );
		//  } else {
			 e.preventDefault();
		//  }
		console.log( fname, email, password );
		try {
			 await  axios.post( "http://localhost:2000/register", {
				fname,
				email,
				password,
				userType,
			 } );
			navigate( '/sign-in' )
			// toast.success( "Registration succesfull" )
			// alert( 'Registration succesfull' )
		}
		catch ( err ) {
			alert( 'Registation failed' )
			// toast.error( "Registration failed" )
		}
	}


			return (
				<div className="auth-wrapper">
					{/* <ToastContainer /> */}
						<div className="auth-inner">
							<form onSubmit={handleSubmit}>
								<h3>Sign Up</h3>
								{
									<div className="mb-3">
										Register As
										<input
											type="radio"
											name="UserType"
											value="User"
											className="m-1"
											onChange={(e) => setUserType(e.target.value)}
										/>
										User
										<input
											type="radio"
											name="UserType"
											value="Admin"
											className="m-1"
											onChange={(e) => setUserType(e.target.value)}
										/>
										Admin
									</div>
								}
								{userType == "Admin" ? (
									<div className="mb-3">
										<label>Secret Key</label>
										<input
											type="text"
											className="form-control"
											placeholder="Secret Key"
											onChange={(e) => setSecretKey(e.target.value)}
										/>
									</div>
								) : null}

								<div className="mb-3">
									<label>Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="First name"
										onChange={(e) => setFname(e.target.value)}
									/>
								</div>

								{/* <div className="mb-3">
								<label>Last name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Last name"
									onChange={ ( e ) => setLname( e.target.value ) }
								/>
						
							</div> */}

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

								<div className="d-grid">
									<button type="submit" className="btn btn-primary">
										Sign Up
									</button>
								</div>
								<p className="forgot-password text-right">
									Already registered
									<Link to="/sign-in">Sign in</Link>
								</p>
							</form>
						</div>
					{/* </ToastContainer> */}
				</div>
			);
							}
