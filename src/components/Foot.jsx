import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function Foot () {
	const navigate = useNavigate()
	
	function logout() {
		localStorage.removeItem("token");
		// localStorage.removeItem("user");
		navigate("/sign-in");
	}
  return (
		<div>
			<div class="footer">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-lg-4">
							<div class="footer-about">
								<h2>About Us</h2>
								<p>
									At Legal Connect, we strive to provide you with comprehensive
									and reliable information about various legal topics. Our
									platform is designed to empower individuals like you to
									navigate the complex world of law with confidence and ease.
								</p>
							</div>
						</div>
						<div class="col-md-6 col-lg-8">
							<div class="row">
								<div class="col-md-6 col-lg-4">
									<div class="footer-link">
										<h2>Services Areas</h2>
										<a href="">Civil Law</a>
										<a href="">Family Law</a>
										<a href="">Business Law</a>
										<a href="">Education Law</a>
										<a href="">Immigration Law</a>
									</div>
								</div>
								<div class="col-md-6 col-lg-4">
									<div class="footer-link">
										<h2>Useful Pages</h2>
										<a href="">About Us</a>
										<a href="">Practices</a>
										<a href="">Attorneys</a>
										<a href="">Case Studies</a>
										<a href="">FAQs</a>
									</div>
								</div>
								<div class="col-md-6 col-lg-4">
									<div class="footer-contact">
										<h2>Get In Touch</h2>
										<p>
											<i class="fa fa-map-marker-alt"></i>Accra, Ghana
										</p>
										<p>
											<i class="fa fa-phone-alt"></i>+233 555 4296 55
										</p>
										<p>
											<i class="fa fa-envelope"></i>legalconnect@.com
										</p>
										<div class="footer-social">
											<a href="">
												<i class="fab fa-twitter"></i>
											</a>
											<a href="">
												<i class="fab fa-facebook-f"></i>
											</a>
											<a href="">
												<i class="fab fa-youtube"></i>
											</a>
											<a href="">
												<i class="fab fa-instagram"></i>
											</a>
											<a href="">
												<i class="fab fa-linkedin-in"></i>
											</a>
										</div>
										<button className="logout" onClick={logout}>
											Logout
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
