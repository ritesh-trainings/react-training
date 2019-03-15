import React, { Component } from "react";

class WidgetOne extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true
    };
    this.onlike = this.onlike.bind(this);
  }

  onlike() {
    if (this.state.clicked == true) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
    // console.log(this.state.clicked);
  }
  render() {
    return (
      <div
        className="card border border-primary shadow bg-white rounded p-2 m-3"
        style={{  }}
      >
        <img
          className="card-img-top"
          src="https://i.ytimg.com/vi/_z-1fTlSDF0/maxresdefault.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 p-0">
                {this.state.clicked && (
                  <i
                    className="fa fa-heart-o fa-2x p-0"
                    aria-hidden="true"
                    onClick={this.onlike}
                  />
                )}
                {!this.state.clicked && (
                  <i
                    className="fa fa-heart fa-2x p-0"
                    aria-hidden="true"
                    onClick={this.onlike}
                  />
                )}
              </div>
              <input
                type="text"
                className="form-control col-sm-10 border border-primary shadow bg-white rounded "
                placeholder="Comment Here"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WidgetOne;
