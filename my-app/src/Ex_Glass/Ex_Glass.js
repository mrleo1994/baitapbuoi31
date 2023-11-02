import React, { Component } from "react";
import Model_Before from "./Model_Before";
import Model_After from "./Model_After";
import Glass_Type from "./Glass_Type";

export default class Ex_Glass extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="m-3">
            <Model_Before />
          </div>
          <div className="m-3">
            <Model_After />
          </div>
        </div>
        <div>
          <Glass_Type />
        </div>
      </div>
    );
  }
}
