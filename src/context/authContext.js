import { createContext, useReducer } from "react";
import { userAuthReducer } from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './toastStyle.css';

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, dispatch] = useReducer(userAuthReducer, {
        isLoggedIn: false,
        user: {},
        token: "",
    });
    const setLoginSuccess = (data) => {
        console.log(data);
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
    };
    const authenticateUser = async (event, email, password) => {
        event.preventDefault();
        try {
            const data = {
                email: email,
                password: password,
            };
            const response = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
            });
            console.log(response.status);
            if (response.status === 200) {
                const responseData = await response.json();
                setLoginSuccess(responseData);
                localStorage.setItem("token", responseData.encodedToken);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const signUpHandler = async (event, firstname, lastname, email, password) => {
        event.preventDefault();
        try {
          const data = {
            email: email,
            password: password,
            firstName: firstname,
            lastName: lastname,
          };
          const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
          });
          console.log(response.status);
          if (response.status === 201) {
            const responseData = await response.json();
            localStorage.setItem("token", responseData.encodedToken);
            navigate("/login");
            toast("Account has been created. Please login to continue",{
                position:"top-center",
                closeOnClick: true,
                pauseOnHover: true,
                autClose:5000,
            });

          }
        }catch(error){
            console.log(error)
        }
        }
        const checkLogin = () => {
            return userData.isLoggedIn && localStorage.getItem("token") !== null;
          };
          const logoutHandler = () => {
            if (checkLogin()) {
              dispatch({ type: "LOGOUT_SUCCESS", payload: [] });
              localStorage.removeItem("token");
            }
          };


    return (
    <AuthContext.Provider
     value={{
        checkLogin,
         authenticateUser,
        logoutHandler,
        signUpHandler,
        user: userData.user,
        isLoggedIn: userData.isLoggedIn,
    }}>
        {children}
    </AuthContext.Provider>);
};
export { AuthContextProvider, AuthContext };
