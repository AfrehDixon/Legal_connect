import React from "react";
import "../../App.css";
import Footer from "../Footer";
import About from '../About'
import Termdetail from "../Termdetail";
import Contactcom from "../Contactcom";
import Contmap from "../Contmap";
import Foot from "../Foot";
import { Link } from "react-router-dom";

export default function Aboutle() {
	return (
		<div>
			
			<About />
			{/* <Aboutle /> */ }
			<Termdetail />
			{/* <Footer /> */}
			<Foot />
			{/* <Contactcom /> */ }
			{/* <Contmap /> */}
		</div>
		
	);
}
