import React, { Component, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../../components/login_form/LoginForm";
import { withRouter } from "react-router";


export default function Login(){
  let { loginUser } = useContext(AuthContext)
  return (
    <div>
        {/* <LoginForm /> */}

        <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter username" />
          <input type="password" name="password" placeholder="Enter password" />
          <input type="submit" />
        </form>
      </div>
    );
}
