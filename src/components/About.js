import React from 'react'
import aboutimg from '../img/ab2.jpeg'

export default function about() {
  return (
      <div>
          <div class="about">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-5 col-md-6">
						<div class="about-img">
							<img src={aboutimg} alt="Image" />
						</div>
					</div>
					<div class="col-lg-7 col-md-6">
						<div class="section-header">
							<h2>Learn About Us</h2>
						</div>
						<div class="about-text">
							<p>
								Legal Connect is a Global Law Firm with a broad expertise and
								experience, uniquely positioned in Ghana and poised to deliver
								world-class legal services and solutions for international and
								local corporations in all sectors of the economy. We are
								dedicated to transforming complex legal matters with practical
								solutions that fits our clients’ goal
							</p>
							<p>
								We strive to be exceptional and meet the highest standards by
								recognizing that reputation is vital to our success and that we
								have a duty to grow and preserve it for the long term. We also
								value team work in our effort to respond effectively and
								efficiently to the legal needs of our clients.
							</p>
							<a class="btn" href="">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
    </div>
  )
}
