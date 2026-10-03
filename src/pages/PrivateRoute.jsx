import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../context/AuthContext.jsx";

function PrivateRoute() {
    const { isAuth } = useContext(AuthContext);

    return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;