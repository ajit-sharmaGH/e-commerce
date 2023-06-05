import "./profile.css";
import {useContext} from "react";
import { AuthContext } from "../context/authContext";
const ProfilePage = ()=>{

    const { user, logoutHandler } = useContext(AuthContext);
    return (
        <>
        <div className="profile-container">
          <h2>Profile details</h2>
          <div className="profile-details">
            <p>
              <b>First Name:</b> {user?.firstName}
            </p>
            <p>
              <b>Last Name:</b> {user?.lastName}
            </p>
            <p>
              <b>Email:</b>
              {user?.email}
            </p>

              <button
                className="profile-btn"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            
          </div>
        </div>
      </>

    )
}
export {ProfilePage}