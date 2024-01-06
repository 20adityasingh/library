import { NavLink } from "react-router-dom";
import React, { useState } from "react";
const Registerpage = () => {
  const [button1Color, setButton1Color] = useState("rgb(248, 241, 230)");
  const [button2Color, setButton2Color] = useState();
  const [showUserSignIn, setShowUserSignIn] = useState(true);
  const [showAdminSignIn, setShowAdminSignIn] = useState(false);
  const [user, setUser] = useState({
    name:"", email:"", pass:"", cpass:""
  })

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
  let name, value
  const handleInput = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]:value})
  }


  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const {name, email, pass, cpass}= user
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        cpass,
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalis Registration ");
    } else {
      window.alert("Registration Successful");
    }
  };

  const handleSubmitAdmin = async (e) => {
    e.preventDefault()
    const {name, email, pass, cpass}= user
    console.log("Data being sent to backend:", { name, email, pass, cpass });
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        cpass,
      })
    });
    const data = await res.json();
    if (data.status ===422 || !data) {
      window.alert("Invalis Registration ");
    } else {
      window.alert("Registration Successful");
    }
  };

  return (
    <div className="registerbar">
      <div className="rdestop shadow-lg">
        <div className="rbutton">
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
        <div className="register">
          {showUserSignIn && (
            <form
              className="registeruser"
              style={{ backgroundColor: button1Color }}
            >
              <div className="name">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handleInput}
                  value={user.name}
                  required
                />
              </div>
              <div className="email">
                <label>Email ID:</label>
                <input
                  type="text"
                  placeholder="Your email id"
                  name="email"
                  onChange={handleInput}
                  value={user.email}
                  required
                />
              </div>
              <div className="pass">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="pass"
                  onChange={handleInput}
                  value={user.pass}
                  required
                />
              </div>
              <div className="cpass">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpass"
                  onChange={handleInput}
                  value={user.cpass}
                  required
                />
              </div>
              <NavLink to="/" className="registerlink">
                <button
                  style={{ backgroundColor: button1Color }}
                  onClick={handleSubmitUser}
                >
                  Register as USER
                </button>
              </NavLink>
            </form>
          )}
          {showAdminSignIn && (
            <form
              className="registeradministrator"
              style={{ backgroundColor: button2Color }}
            >
              <div className="name">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handleInput}
                  value={user.name}
                  required
                />
              </div>
              <div className="email">
                <label>Email ID:</label>
                <input
                  type="text"
                  placeholder="Your email id"
                  name="email"
                  onChange={handleInput}
                  value={user.email}
                  required
                />
              </div>
              <div className="pass">
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="pass"
                  onChange={handleInput}
                  value={user.pass}
                  required
                />
              </div>
              <div className="cpass">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpass"
                  onChange={handleInput}
                  value={user.cpass}
                  required
                />
              </div>
              <NavLink to="/" className="registerlink">
                <button
                  style={{ backgroundColor: button1Color }}
                  onClick={handleSubmitAdmin}
                >
                  Register as USER
                </button>
              </NavLink>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
