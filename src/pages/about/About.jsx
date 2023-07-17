import React, { Component } from "react";
import { withRouter } from "react-router";
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class About extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
      </div>
    );
  }
}

export default withRouter(About);
