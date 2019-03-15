import React, { Component } from "react";

class WidgetOne extends Component {
  constructor() {
    super();
    this.state = {
      image: "1",
      height:"0"
    };
    this.onleft = this.onleft.bind(this);
    this.onright = this.onright.bind(this);
  }

  componentDidMount() {
    const height = this.refs.dab.height;
    this.setState({ height:height });
  }

  onleft() {
    if (this.state.image === "1") {
      this.setState({ image: "2" });
    } else {
      this.setState({ image: "1" });
    }
    // console.log(this.state.clicked);
  }

  onright() {
    if (this.state.image === "1") {
      this.setState({ image: "2" });
    } else {
      this.setState({ image: "1" });
    }
    // console.log(this.state.clicked);
  }
  render() {
    //   console.log("height:"+this.state.height);
    return (
      <div
        className="card border border-primary shadow bg-white rounded p-2 mt-3 mb-3"
        style={{ }}
      >
        <div className="">
          <span className="label label-default text-black-50">
            <h6 className="pl-3">27 September 2018</h6>
          </span>
        </div>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-2 my-auto " style={{textAlign: "center"}}>
            <i
              className="fa fa-chevron-circle-left"
              aria-hidden="true"
              onClick={this.onleft}
            />
          </div>

          <div className="col-sm-8 p-1" style={{ height: "50%" }}>
            {this.state.image == 1 && (
              <img
                style={{ height: "50%" }}
                className="card-img-top"
                ref="dab"
                src="data:image/png;base64,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"
                alt="Card image cap"
              />
            )}
            {this.state.image == 2 && (
              <img
                style={{ height: this.state.height }}
                className="card-img-top"
                src="https://www.ipsr.edu.in/wp-content/uploads/2018/07/Blue-Nissan-e1532334307963.jpg"
                alt="Card image cap"
              />
            )}
          </div>

          <div className="col-sm-2 my-auto" style={{textAlign: "center"}}>
            <i
              className="fa fa-chevron-circle-right my-auto "
              aria-hidden="true"
              onClick={this.onright}
            />
          </div>
        </div>
        <div className="pl-4">
          <span className="label label-default text-black-50 ">
            Get the latest nissan news. Stay updated on our accomplishments and
            be proud of yourselves. Power comes from within
          </span>
        </div>

        <div className="">
          <hr />
        </div>
        <a href='https://www.nissan.in/latest-news.html' 
        target="_blank" rel="noopener noreferrer"
        style={{textDecoration:"none"}}> <div className="text-center">News Updated</div></a>
      </div>
    );
  }
}

export default WidgetOne;
