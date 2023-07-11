import React, { Component } from "react";
import LoginForm from "../../components/login_form/LoginForm";
import Breadcrumb from "../../components/sidebar/Breadcrumb";
import { withRouter } from "react-router";

export class Login extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        <div>Login Page</div>
        <LoginForm />
      </div>
    );
  }
}

export default withRouter(Login);
