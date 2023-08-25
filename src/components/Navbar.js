import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cookies from "universal-cookie";

function Navbar({ isLoggedIn, setIsLoggedIn}) {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const cookies = new Cookies();

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	const loginstate = cookies.get("isLoggedIn") === "true";
	console.log(loginstate);
	// const toggleLogin = () => {
	// 	setIsLoggedIn(!isLoggedIn);
	// };

	useEffect(() => {
		showButton();

		// const loginstate = cookies.get( "isLoggedIn" );
		// if(loginstate){
		// 	console.log( "true" );

		// }
		// return () => {

		// };
	}, []);

		window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						LC
						<i className="fab fa-typo3" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							{loginstate && (
								<Link
									to="/contact"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Contact
								</Link>
							)}
						</li>

						<li>
							<Link
								to="/signup"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					{/* <button
						className="nav-links-mobile"
						onClick={() => {
							toggleLogin();
							closeMobileMenu();
						}}
					>
						Log In
					</button> */}
					{button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
