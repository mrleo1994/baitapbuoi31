import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v1");
            }}
          >
            <img src={`./glassesImage/v1.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          {" "}
          <button
            onClick={() => {
              this.props.handleChangeType("v2");
            }}
          >
            <img src={`./glassesImage/v2.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v3");
            }}
          >
            <img src={`./glassesImage/v3.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v4");
            }}
          >
            <img src={`./glassesImage/v4.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v5");
            }}
          >
            <img src={`./glassesImage/v5.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v6");
            }}
          >
            <img src={`./glassesImage/v6.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v7");
            }}
          >
            <img src={`./glassesImage/v7.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v8");
            }}
          >
            <img src={`./glassesImage/v8.png`} alt="" width={100} height={50} />
          </button>
        </div>
        <div className="col-2">
          <button
            onClick={() => {
              this.props.handleChangeType("v9");
            }}
          >
            <img src={`./glassesImage/v9.png`} alt="" width={100} height={50} />
          </button>
        </div>
      </div>
    );
  }
}
