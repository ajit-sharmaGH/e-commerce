import {useContext} from "react";
import { AuthContext } from "../../context/authContext";
import { Navigate, useLocation} from "react-router";

const RequiresAuth = ({children})=>{
    const location = useLocation();
    const { checkLogin } = useContext(AuthContext);
  return checkLogin() ? children : <Navigate to="/login" state={location} />;
}
export {RequiresAuth}