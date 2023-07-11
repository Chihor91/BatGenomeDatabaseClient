import React, { Component } from "react";
import StrainContent from "../../components/strain_content/StrainContent";
import { withRouter } from "react-router";
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class StrainDetail extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="strain_content">
          <StrainContent id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(StrainDetail);
