import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Aboutle";
import SignUp from "./components/pages/SignUp";
import Aboutle from "./components/pages/Aboutle";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import axios from "axios";
import Admin from "./Admin";
// import Admin from './Admin/Admin.jsx'
// import SideBarItem from "./Admin/components/Sidebar/sidebar-item";
// import SideBar from "./Admin/components/Sidebar";


// import SideBar from "./components/Sidebar";
// import sidebar_menu from "./constants/sidebar-menu";
// import SideBar from "./components/Sidebar";
// import sidebar_menu from "./constants/sidebar-menu";

axios.defaults.baseURL = "http://localhost:4000 ";

function App() {
	return (
		<>
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" element={<Aboutle />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={ <Login /> } />
					<Route path='/admin' element = {<Admin />} />
					{/* <Route path='/admin/home' component={ Admin } /> */}
					
				</Routes>
			</Router>
			{/* <Router>
				<div className="dashboard-container">
					<SideBar menu={sidebar_menu} />

					<div className="dashboard-body">
						<Switch>
						<Route path="*" element={<div>Hleoodd</div>} />
						<Route exact path="/" element={<div></div>} />
						<Route exact path="/orders" element={<Admin />} />
						<Route exact path="/locations" element={<div></div>} />
						<Route exact path="/profile" element={<div></div>} />
						</Switch>
					</div>
				</div>
			</Router> */}
		</>
	);
}

export default App;
