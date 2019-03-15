import React, { Component } from "react";

class WidgetOne extends Component {
  constructor() {
    super();
    this.state = {
      image: "1"
    };
    this.onleft = this.onleft.bind(this);
    this.onright = this.onright.bind(this);
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
    return (
      <div
        className="card border border-primary shadow bg-white rounded p-2 mt-3 mb-3"
        style={{ }}
      >
        <div
          className=""
          style={{ height: "20%", backgroundColor: "rgb(41, 17, 219,0.85)"}}
        >
          <span className="label label-default  pl-3">
            
            <h5 className="text-center" style={{opacity: "none"}}>Things to Know</h5>
          
          </span>
        </div>

        <div className="p-3">
          <h6>
            <span class="label label-default ">
              <i className="fa fa-circle fa-xs pr-3 text-black-50" aria-hidden="true" />{" "}
              Product Launch 4.3 Version
            </span>
          </h6>
        </div>

        <div className="p-3">
          <h6>
            <span class="label label-default ">
              <i className="fa fa-circle fa-xs pr-3 text-black-50" aria-hidden="true" />{" "}
              System Update
            </span>
          </h6>
        </div>

        <div className="p-3">
          <h6>
            <span class="label label-default ">
              <i className="fa fa-circle fa-xs pr-3 text-black-50" aria-hidden="true" />
              Latest innovation in Nissan
            </span>
          </h6>
        </div>

        <div className="">
          <br />
          <br />
   
          <hr />
        </div>
        <a href='http://www.nissanmotor.jobs/amie/eu/'   
          target="_blank" rel="noopener noreferrer"
        style={{textDecoration:"none"}}> <div className="text-center">Know More</div></a>
      </div>
     
    );
  }
}

export default WidgetOne;
