import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = prop => {
    const { store } = useContext(Context);
    const params = useParams();
    return (
        <div className="Heather">
            <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>
            <h1 className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Hyperspace Back Home!
                </span>
            </Link>
        </div>
    );
};
   Single.propTypes = {
        match: PropTypes.object
   }; 