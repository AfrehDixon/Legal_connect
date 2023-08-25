import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import About from "../About";
import PracticeCard from "../PracticeCard";
import Choose from "../Choose";
import Expert from "../Expert";
import Foot from "../Foot";

function Home() {
	return (
		<>
			<HeroSection />
      <About />
      <PracticeCard />
      <Choose />
      <Expert />
			{/* <Cards /> */}
			{/* <Footer /> */}
			<Foot />
		</>
	);
}

export default Home;
