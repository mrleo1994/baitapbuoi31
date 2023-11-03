import React, { Component } from "react";
import Model_Before from "./Model_Before";
import Model_After from "./Model_After";
import Glass_Type from "./Glass_Type";

export default class Ex_Glass extends Component {
  state = {
    type: "v1",
  };
  handleChangeType = (newType) => {
    this.setState({ type: newType });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="m-3">
            <Model_Before />
          </div>
          <div className="m-3">
            <Model_After type={this.state.type} />
          </div>
        </div>
        <div>
          <Glass_Type handleChangeType={this.handleChangeType} />
        </div>
      </div>
    );
  }
}
