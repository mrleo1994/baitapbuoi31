import React, { Component } from "react";

export default class Model_After extends Component {
  state = {
    type: "g1",
  };
  handleChangeType = (type) => {
    this.setState({ type: type });
  };
  render() {
    return (
      <div className="position-relative image-container">
        <img className="img-fluid" src={`./glassesImage/model.jpg`} />
        <img
          className="position-absolute overlay-image"
          width={200}
          height={200}
          src={`./glassesImage/${this.state.type}.jpg`}
        />
      </div>
    );
  }
}
