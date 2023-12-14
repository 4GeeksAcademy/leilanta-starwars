import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (

		<div id="mainNavigation">
		<nav role="navigation">
		  <div className="py-3 text-center border-bottom">
			<img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG5.png" alt="" className=" logo invert"/>
		  </div>
		</nav>
		<div className="navbar-expand-md">
		  <div className="navbar-dark text-center my-2">
			<button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
			</button>
		  </div>
		  <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="navbar-nav mx-auto ">
			  <li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Characters</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Starships</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Planets</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Favourites</a>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>

	);
};
