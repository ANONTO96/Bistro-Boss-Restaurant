import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading
    } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-64 flex justify-center items-center"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;