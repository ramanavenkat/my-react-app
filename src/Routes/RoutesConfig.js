import React from "react";
import { useRoutes } from "react-router-dom";
import Registration from "../Components/Registration";

const RouteConfig = () =>{
    let routes = useRoutes([
        {path:'/', element: <Registration />}
    ])
    return routes;
}

export default RouteConfig;