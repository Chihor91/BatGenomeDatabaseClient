import React, { Component } from "react";
import { withRouter } from "react-router";
import CategoryContent from "../../components/taxonomy_handler/CategoryContent";
import Breadcrumb from "../../components/sidebar/Breadcrumb";

export class TaxonomyDetail extends Component {
  render() {
    return (
      <div>
        <Breadcrumb Crumb={this.props.Crumb} Match={this.props.match} />
        <div className="strain_content">
          <CategoryContent
            category={this.props.match.params.category}
            id={this.props.match.params.id}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(TaxonomyDetail);
