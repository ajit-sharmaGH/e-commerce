import "./auth.css";
import {useState} from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
    const { signUpHandler, checkLogin,user } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenConfirm, setIsHiddenConfirm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  if (checkLogin()) {
    navigate("/");
  }
  const disableHandler = (e) => {
    if (e.target.value.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const confirmPasswordHandler = (e) => {
    if (
      !disabled &&
      e.target.value.trim() !== "" &&
      document.getElementById("password").value !== e.target.value
    ) {
      setMsg("Password not matching");
    } else {
      setMsg("");
    }
  };
    return (
   
    <div className="flex-center form_body">
      <form className="login-form form-container"
       onSubmit={(e) =>
        signUpHandler(
          e,
          e.target.elements.firstname.value,
          e.target.elements.lastname.value,
          e.target.elements.email.value,
          e.target.elements.password.value
        )
      }
      >
      <h1 className="sub-headings">SIGNUP FORM</h1>
        <div className="flex-col login-form-div">
          <aside className="flex-wrap">
            <span className="flex-col">
              <label htmlFor="firstname">First Name</label>
              <input
              id="firstname"
              type="text"
              value={user?.firstname}
              placeholder="Ajit"
              className="login-input"
              required={true}
              />
            </span>

            <span className="flex-col">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                type="text"
                value={user?.lastname}
                placeholder="Sharma"
                required={true}
                className="login-input"
              />
            </span>
          </aside>
        </div>
        <div className="flex-col login-form-div">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={user?.email}
            placeholder="example@gmail.com"
            pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                  required={true}
                  className="login-input"
          />
        </div>
        <div className="flex-col login-form-div">
          <label>Enter Password</label>
          <input
            id="password"
            type={isHidden ? "password" : "text"}
            placeholder="*****"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            required={true}
            className="login_password-input"
            onChange={(e) => disableHandler(e)}
          />
          
         <span className="show-password" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <p className="pwd-not-matching"> {msg} </p>
          <label>Confirm Password</label>
          <input
           id="confirm-password"
           type={isHiddenConfirm ? "password" : "text"}
           placeholder="****"
           pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
           onChange={(e) => confirmPasswordHandler(e)}
           required={true}
            className="login_password-input"
            disabled={disabled}
          />
          <span
          className="show-password"
          onClick={() => setIsHiddenConfirm(!isHiddenConfirm)}
        >
          {isHiddenConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
          <div className="flex">
            <span className="form_checkbox-input-container">
              <input type="checkbox" className="checkbox-input" />
              Remember Me
            </span>
            <button className="forget-pwd-btn">forget password</button>
          </div>
          <button type="submit" className="btn-outline form-btn">
          Signup
          </button>

          <aside className="flex-wrap">
            <span>Already have an account &nbsp;</span>
            <Link to="/login" className="link-tag">
              Login&nbsp;{`>>`}
            </Link>
          </aside>
        </div>
      </form>
    </div>
    );
};
export { SignupForm };
