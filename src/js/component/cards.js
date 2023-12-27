import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = (descrip) => {
	const { actions } = useContext(Context)

	const { name, model, gravity, terrain } = descrip.item.properties
	const img = `${descrip.types}/${descrip.item.uid}`
	return (

		<div className="card container_card mx-1" style={{ minWidth: "18rem" }}>

			<div className="card-body">
				<h5 className="card-title text-light">{name}</h5>

				{
					descrip.types == "planets" }
				{
					descrip.types == "starships" }
				{
					descrip.types == "people" }

				<div className="container_button d-flex justify-content-between mt-5 gap-3">
					<Link to={`/demo/${descrip.types}/${descrip.item.uid}`} className="btn btn-outline-danger d-flex mr-5">+</Link>
					<button href="#" className="btn btn-outline-warning m-auto align-items-center fas fa-heart text-danger"

						onClick={() => { actions.getFavorites(descrip.item.properties.name) }}></button>
				</div>
			</div>
		</div>
	);
};