import React, { Component } from "react";
import StrainContent from "../../components/strain_content/StrainContent";
import { withRouter } from "react-router";

export class StrainDetail extends Component {
  render() {
    return (
      <div>
        <div className="strain_content">
          <StrainContent id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(StrainDetail);
