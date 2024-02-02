import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js"


export const Demo = () => {
	const { store } = useContext(Context);
	const { inf, id } = useParams()
	const [item, setItem] = useState({})
	const getItem = () => {
		const item = store[inf].find(element => element.uid == id)
		setItem(item)
	}

	console.log(item);

	useEffect(() => {
		getItem()
	}, [store[inf]])

	return (

		<div container>
	<div className="align-items-center col-lg-6">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{item?.properties?.name}</h2>
	<h4 className="card-title">{item?.description}</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	</div>
  </div>
  <div col3>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
	{
									inf == "planets" && (
										<div>
											<p className="text-start-danger m-0">Name: {item?.properties?.name}</p>
											<p className="text-start-danger m-0">Terrain: {item?.properties?.terrain}</p>
											<p className="text-start-danger m-0">Surface: {item?.properties?.surface_water}</p>
											<p className="text-start-danger m-0">Orbital: {item?.properties?.orbital_period}</p>
											<p className="text-start-danger m-0">Gravity: {item?.properties?.gravity}</p>
											<p className="text-start-danger m-0">Diameter: {item?.properties?.diameter}</p>
											<p className="text-start-danger m-0">Population: {item?.properties?.population}</p>
											<p className="text-start-danger m-0">Created: {item?.properties?.created}</p>
										</div>
									)} {inf == "starships" && (
										<div>
											<p className="text-start-danger m-0">Name: {item?.properties?.name}</p>
											<p className="text-start-danger m-0">Model: {item?.properties?.model}</p>
											<p className="text-start-danger m-0">Manufacturer: {item?.properties?.manufacturer}</p>
											<p className="text-start-danger m-0">Cost in credits: {item?.properties?.cost_in_credits}</p>
											<p className="text-start-danger m-0">lenght: {item?.properties?.lenght}</p>
											<p className="text-start-danger m-0">Max atmospherical speed: {item?.properties?.max_atmosphering_speed}</p>
											<p className="text-start-danger m-0">Crew: {item?.properties?.Crew}</p>
											<p className="text-start-danger m-0">Passengers: {item?.properties?.passengers}</p>
											<p className="text-start-danger m-0">Cargo capacity: {item?.properties?.cargo_capacity}</p>
											<p className="text-start-danger m-0">Consumables: {item?.properties?.consumables}</p>
											<p className="text-start-danger m-0">Hyperdrive rating: {item?.properties?.hyperdrive_rating}</p>
											<p className="text-start-danger m-0">MGLT: {item?.properties?.MGLT}</p>
											<p className="text-start-danger m-0">Starship class: {item?.properties?.starship_class}</p>
										</div>
									)
								}{inf == "people" && (
									<div>
										<p className="text-start-danger m-0">Name: {item?.properties?.name}</p>
										<p className="text-start-danger m-0">Height: {item?.properties?.height}</p>
										<p className="text-start-danger m-0">Mass: {item?.properties?.mass}</p>
										<p className="text-start-danger m-0">Hair color: {item?.properties?.hair_color}</p>
										<p className="text-start-danger m-0">Skin color: {item?.properties?.skin_color}</p>
										<p className="text-start-danger m-0">Eye color: {item?.properties?.eye_color}</p>
										<p className="text-start-danger m-0">Birth year: {item?.properties?.birth_year}</p>
										<p className="text-start-danger m-0">Gender: {item?.properties?.gender}</p>
										<p className="text-start-danger m-0">Created: {item?.properties?.created}</p>
										<p className="text-start-danger m-0">Edited: {item?.properties?.edited}</p>
										<p className="text-start-danger m-0">Homeworld: {item?.properties?.homeworld}</p>
									</div>
								)
								}
	</li>
  </ul>
</div>
</div>
	);
};

