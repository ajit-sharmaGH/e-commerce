import "./auth.css";
import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const LoginForm = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { checkLogin, user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  if (checkLogin()) {
    if (location?.state?.pathname) {
      navigate(location?.state?.pathname);
     
    } else {
      navigate("/");
    }
  }

  return (
    <div className="flex-center form_body">
      <form
        className="login-form form-container"
        onSubmit={(event) =>
          authenticateUser(
            event,
            event.target.elements.userEmail.value,
            event.target.elements.userPassword.value
          )
        }
      >
        <h1 className="sub-headings">LOGIN FORM</h1>
        <div className="flex-col login-form-div">
          <label htmlFor="userEmail">E-mail</label>
          <input
            className="login-input"
            type="email"
            placeholder="example@gmail.com"
            id="userEmail"
            value={user?.email}
            pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required={true}
          />
        </div>
        <div className="flex-col login-form-div">
          <label htmlFor="userPassword">Enter Password</label>
          <input
            className="login_password-input"
            type={isHidden ? "password" : "text"}
            value={user?.password}
            placeholder="*****"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            id="userPassword"
            required={true}
          />
          <span
            className="show-password"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
          <div className="flex">
            <span className="form_checkbox-input-container">
              <input type="checkbox" className="checkbox-input" />
              Remember Me
            </span>
          </div>
          <button type="submit" className="btn-outline form-btn">
            Login
          </button>
          <button
            onClick={(e) =>
              authenticateUser(e, "ajitsharmainvalid@gmail.com", "ajitSharma90")
            }
            className="login-button btn-outline"
          >
            Login with Test Credentials
          </button>
          <aside className="flex-wrap">
            <Link to="/signup" className="link-tag">
              Create New Account&nbsp;{`>>`}
            </Link>
          </aside>
        </div>
      </form>
    </div>
  );
};
export { LoginForm };
