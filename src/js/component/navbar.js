import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-primary-emphasis d-flex justify-content-around">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="navbarlogo" src= "https://www.pngall.com/wp-content/uploads/13/Star-Wars-Logo-Transparent.png"/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
