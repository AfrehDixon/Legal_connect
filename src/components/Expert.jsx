import React from "react";
import law1 from "../img/lawyer1.jpg";
import law2 from "../img/lawyer2.jpg";
import law3 from "../img/lawyer3.jpg";
import law6 from "../img/lawyer6.jpg";

export default function Expert(prop) {
	return (
		<div>
			<div class="team">
				<div class="container">
					<div class="section-header">
						<h2>Meet Our Expert Attorneys</h2>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="team-item">
								<div class="team-img">
									<img src={law1} alt="Team Image" />
								</div>
								<div class="team-text">
									<h2>Charles Yeboah</h2>
									<p>Business Consultant</p>
									<p>{prop.about}</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="team-item">
								<div class="team-img">
									<img src={law2} alt="Team Image" />
								</div>
								<div class="team-text">
									<h2>Dixon Afreh</h2>
									<p>Criminal Consultant</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="team-item">
								<div class="team-img">
									<img src={law3} alt="Team Image" />
								</div>
								<div class="team-text">
									<h2>Gloria Adomah</h2>
									<p>Divorce Consultant</p>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="team-item">
								<div class="team-img">
									<img src={law6} alt="Team Image" />
								</div>
								<div class="team-text">
									<h2>Evans Anabah</h2>
									<p>Immigration Consultant</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
