import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export const Home = () => (
	<div className="text-center mt-5">
		{/* <Parallax pages ={4}>
			<ParallaxLayer 
			offset={0}
			speed={1}>
			factor={2}
			style = {{
				backgroundImage: url("https://img.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_1048-12526.jpg?w=900&t=st=1702566025~exp=1702566625~hmac=abb0eb4300cb233a76753eb25ba6fc17c3dd6bcf18c702108ff30d6c9c901024"),
				backgroundSize: 'cover',
			}}
			Aquí va el contenido
			</ParallaxLayer>

			<ParallaxLayer 
			offset={2}
			speed={1}>
			factor={2}	
			style = {{
				backgroundImage: url("https://img.freepik.com/free-photo/alien-planet-building_456031-58.jpg?w=1380&t=st=1702565875~exp=1702566475~hmac=4b74bc410acdf20174b7b5f32f3cbbce42010d9109448a601742822bd4524ce8"),
				backgroundSize: 'cover',
			}}
			Aquí va el contenido
			</ParallaxLayer>
		</Parallax> */}
		<h1>Characters</h1>
		
		<div class="row m-5">
    <div class="col">
		<div className="card text-bg-warning m-auto">
			<img src="data:image/jpeg;base64,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XFhYAcr3v6nqZqVelTWANl+UG+u7Hq3+JqtDSkrmpErEgXl+c2tc2ve3K/W3XUyyUlFby8PMcSQbD4hjfUgG2g0GgtqJRW00Ougsbaj35zDLg3URaKBplC353ubC/wDQ/US1FDEgacxf05THIq4Gx2kxwrgz18/T4bMp6lQDb8xNCtUNQKAi5hpmUEFugYbE+onUcPFOnhRUqVGbKr2pg2XOzABGtqx5m+n0kWXHP0ly0Xby2Y5RqCxtroOQ2N+0jJmquvIW11/79ZivIt9qSkrKSxKRETSEREgRESBERAREQEREBERATe4XifhuSdmR0P8AOjKPzI+k0ZeikmwFzytvLg3mpkXFtQe9tec1qptpce3+xM9eqpANyWI8w1sDqLHrsp97cpok3l+FukREqES4LK/DNr2lymrIiVtIKSkrECkRKyKpeIiZF4a215lbEErlud776bW2tv6zXiRVYlIhVZSVlICIibjJERARETICIiAiIhYREQEREqAmxg/nX+Jf6iIlgwvvLYiEVgREsGVdpnHy+0ROsY6ahl3L/vSInNtZBiJBSIiQIiJKpERMqSsRCkRECkRE3GSIiB//2Q==" className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Darth Vader</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>
		</div>
		<div class="col">
		<div className="card text-bg-warning m-auto">
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Primary card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>
		</div>
		<div class="col">
		<div className="card text-bg-warning m-auto">
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Primary card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>
		</div>
		<div class="col">
		<div className="card text-bg-warning m-auto">
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Primary card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>
		</div>
		<div class="col">
		<div className="card text-bg-warning m-auto">
			<img src="..." className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Primary card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>
		</div>
		</div>
		

	
 
    </div>

);
