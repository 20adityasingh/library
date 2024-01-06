import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Loginpage = () => {
  const [button1Color, setButton1Color] = useState("rgb(248, 241, 230)");
  const [button2Color, setButton2Color] = useState();
  const [showUserSignIn, setShowUserSignIn] = useState(true);
  const [showAdminSignIn, setShowAdminSignIn] = useState(false);

  const handleUserButtonClick = () => {
    setButton1Color("rgb(248, 241, 230)");
    setButton2Color();
    setShowUserSignIn(true);
    setShowAdminSignIn(false);
  };

  const handleAdminButtonClick = () => {
    setButton1Color();
    setButton2Color("rgb(248, 241, 230)");
    setShowUserSignIn(false);
    setShowAdminSignIn(true);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    // Handle User form submission logic here
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    // Handle Admin form submission logic here
  };

  return (
    <div className="loginbar">
      <div className="ldestop shadow-lg">
        <div className="lbutton">
          <button
            style={{ backgroundColor: button1Color }}
            onClick={handleUserButtonClick}
          >
            User
          </button>
          <button
            style={{ backgroundColor: button2Color }}
            onClick={handleAdminButtonClick}
          >
            Administrator
          </button>
        </div>
        <div className="signin">
          {showUserSignIn && (
            <form
              onSubmit={handleSubmitUser}
              className="signinuser"
              style={{ backgroundColor: button1Color }}
            >
              <div className="username">
                <label>Username:</label>
                <input type="text" placeholder="email id" />
              </div>
              <div className="userpass">
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Sign In as User</button>
              <NavLink to="/register" className="userlink">
                Don't have account? Create one.
              </NavLink>
            </form>
          )}
          {showAdminSignIn && (
            <form
              onSubmit={handleSubmitAdmin}
              className="signinadministrator"
              style={{ backgroundColor: button2Color }}
            >
              <div className="adminname">
                <label>AdminID:</label>
                <input type="text" placeholder="email id" />
              </div>
              <div className="adminpass">
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Sign In as Admin</button>
              <NavLink to="/register" className="adminlink">
                Don't have account? Create one.
              </NavLink>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
