import React, { Component } from "react";

export default class Model_After extends Component {
  render() {
    return (
      <div className="position-relative image-container">
        <img className="img-fluid" src={`./glassesImage/model.jpg`} />
        <img
          className="position-absolute overlay-image"
          width={260}
          height={100}
          style={{ top: 150, left: 110, opacity: 0.5 }}
          src={`./glassesImage/${this.props.type}.png`}
        />
      </div>
    );
  }
}
