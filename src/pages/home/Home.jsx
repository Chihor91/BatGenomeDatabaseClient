import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router";
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class Home extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="homepage">
          <h1>Welcome to the Home Page!</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
