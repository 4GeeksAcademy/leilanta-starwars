import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (

		<div id="mainNavigation">
		<nav role="navigation">
		  <div className="py-3 text-center border-bottom">
			<img src="https://www.pngall.com/wp-content/uploads/13/Star-Wars-Logo-Transparent.png" alt="" className=" logo invert"/>
		  </div>
		</nav>
		<div className="navbar-expand-md">
		  <div className="navbar-dark text-center my-2">
			<button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
			</button>
		  </div>
		</div>
	  </div>

	);
};
