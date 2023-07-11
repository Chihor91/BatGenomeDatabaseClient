import React, { Component } from "react";
import { withRouter } from "react-router";
import TaxonomyHandler from "../../components/taxonomy_handler/TaxonomyHandler";
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class Taxonomy extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="taxonomy">
          <TaxonomyHandler />
        </div>
      </div>
    );
  }
}

export default withRouter(Taxonomy);
