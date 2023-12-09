import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="carousel-container">
        <div className="card text-bg-warning mb-3" style="max-width: 18rem;">
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
 
    </div>
	</div>
	
);
