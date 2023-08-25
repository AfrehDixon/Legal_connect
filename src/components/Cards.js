import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import  portfolio1 from '../img/portfolio1.jpg'
import  portfolio2 from '../img/portfolio2.jpg'
import  portfolio3 from '../img/portfolio3.jpg'
import  portfolio4 from '../img/portfolio4.jpg'
import  portfolio5 from '../img/portfolio5.jpg'
import  portfolio6 from '../img/portfolio6.jpg'

function Cards() {
	return (
		<div className="cards">
			<h1>Our Practice Areas</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={portfolio1}
							text="Murder Case "
							// label='Adventure'
							// path='/services'
						/>
						<CardItem
							src={portfolio2}
							text="Money Laundery"
							// label='Luxury'
							// path='/services'
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={portfolio3}
							text="Political Cases"
							// label='Mystery'
							// path='/services'
						/>
						<CardItem
							src={portfolio6}
							text="Property Sharing Cases"
							// label='Adventure'
							// path='/products'
						/>
						<CardItem
							src={portfolio5}
							text="Divorce Cases"
							// label='Adrenaline'
							// path='/sign-up'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
