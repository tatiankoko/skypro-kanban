import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

function PrivateRoute() {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;