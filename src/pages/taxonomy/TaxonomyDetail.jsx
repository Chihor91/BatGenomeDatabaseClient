import React, { Component } from "react";
import { withRouter } from "react-router";
import CategoryContent from "../../components/taxonomy_handler/CategoryContent";

export class TaxonomyDetail extends Component {
  render() {
    return (
      <div>
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
