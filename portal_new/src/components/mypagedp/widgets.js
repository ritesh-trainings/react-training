import React, { Component } from "react";
import Try from "./try";

class WidgetsFlip extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(props) {
    console.log("propsfromdash", this.props.widg);
    const WidgetDash = this.props.widg.map(val => {
      return (
        <div className="col-6 mb-3" style={{ height: "350px" }}>
          <Try
            key={val.id}
            title={val.title}
            img={val.img}
            link={val.link}
            id={val.id}
            removeee={this.props.removee}
          />
        </div>
      );
    });
    return <div className="row">{WidgetDash}</div>;
  }
}

export default WidgetsFlip;
