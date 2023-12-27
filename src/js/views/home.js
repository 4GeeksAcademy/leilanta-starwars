import React, { useContext } from "react";
import { Cards } from "../component/cards.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
    const { store } = useContext(Context)
    return (

        <div className="">
            <div className="Starship m-5 bg-transparent">
                <h1 className="titleStarship text-danger mt-3">Starships</h1>
                <div className="py-2 overflow-auto">
                    <div className="d-flex flex-row flex-nowrap">
                        {store.starships.map((starships, id) => {
                            return (<Cards item={starships} key={id} types={"starships"} />)
                        })}
                    </div>
                </div>
            </div>
            <div className="planets m-5 bg-transparent">
                <h1 className="titlePlanets text-danger mt-5">Planets</h1>
                <div className="py-2 overflow-auto">
                    <div className="d-flex flex-row flex-nowrap">
                        {store.planets.map((planet, id) => {
                            return (<Cards item={planet} key={id} types={"planets"} />)
                        })}
                    </div>
                </div>
            </div>
            <div className="planets m-5 bg-transparent">
                <h1 className="titlePlanets text-danger mt-5">Characters</h1>
                <div className="py-2 overflow-auto">
                    <div className="d-flex flex-row flex-nowrap">

                        {store.people.map((people, id) => {
                            return (<Cards item={people} key={id} types={"characters"} />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};