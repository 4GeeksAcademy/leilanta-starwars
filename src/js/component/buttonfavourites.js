import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const ButtonFavourites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="btn-group dropstart">
                <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favourites {store.favorites.length}
                </button>
                <ul className="dropdown-menu text-black">
                    {store.favorites.length === 0 ? (
                        <li><span className="dropdown-item">No favourites selected yet</span></li>

                    ) : (

                        store.favorites.map((item, id) => (

                            <li key={id} className="d-flex justify-content-between m-2  ">
                                <span className="dropdown-items text-black">{item} </span>

                                <button type="button" className="btn btn-outline-danger ms-2"
                                    onClick={() => { actions.removeFavorites(id) }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )
                    }
                </ul>
            </div>
        </div>
    );
};