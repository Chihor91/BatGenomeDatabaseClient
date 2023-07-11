import React, { Component } from "react";
import { withRouter } from 'react-router';
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        Dashboard
      </div>
    );
  }
}

export default withRouter(Dashboard);
