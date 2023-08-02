import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./Login.css"

export default function Login(){
  let { loginUser } = useContext(AuthContext)
  return (
    <body>
      <div class="wrapper">
        <form className="loginform" onSubmit={loginUser}>
            <h1>Login</h1>
            <div class="input-box">
              <input type="text" name="username" placeholder="Enter username" />
            </div>
            <div class="input-box">
              <input type="password" name="password" placeholder="Enter password" />
            </div>
            <button type="submit" class="login_btn">Login</button>
        </form>
      </div>
    </body>
  );
}
