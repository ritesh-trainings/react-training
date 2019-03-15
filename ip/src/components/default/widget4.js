import React, { Component } from "react";

class WidgetFour extends Component {
  render() {
    return (
      <div className="input-group mb-3 ml-3" style={{}}>
        <input
          type="text"
          className="form-control"
          placeholder="What do you have in your mind"
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fa fa-pencil fa-xs" />
          </span>
        </div>
      </div>
    );
  }
}

export default WidgetFour;
