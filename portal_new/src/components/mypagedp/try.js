import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import StarRatingComponent from "react-star-rating-component";

export default class Try extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      display: true,
      rating: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }
  handleClose1() {
    console.log(this.state.display);
    this.setState({ display: false });
    console.log(this.state.display);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }



  // dragstart(ev) {
  //   // ev.preventDefault();
  //   console.log("dragging" + ev.target.id);
  //   // this.a = ev.target.id;
  // }

  // ondrop(ev) {
  //   // ev.preventDefault();
  //   console.log("dropped", ev.target.id);
  // }

  // ondragover(ev) {
  //   ev.preventDefault();
  //   console.log("dragover" + ev.target.id);
  // }

  render(props) {
    const { rating } = this.state;
    console.log("titlefromtry", this.props.title);
    return (
      <div  
      // draggable="true" id={this.props.id}
      // onDragStart={this.dragstart}
      // onDrop={this.ondrop}
      //           onDragOver={this.ondragover}
      >
        {this.state.display && (
          <div className="container" style={{}}>
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div
                className="card border border-primary shadow bg-white rounded p-2 "
                key="front"
                style={{}}
              >
                <a target="_blank" href={this.props.link}>
                  <img
                    className="card-img-top"
                    src={this.props.img}
                    alt="Card image cap"
                    style={{ height: "75%" }}
                  />
                </a>
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-3 p-0">
                        <i
                          className="fa fa-cog fa-2x p-0"
                          aria-hidden="true"
                          onClick={this.handleClick}
                        />
                      </div>
                      <div className="col-sm-8" style={{ fontSize: "20px" }}>
                        {this.props.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card border border-primary shadow bg-white rounded p-2 "
                key="back"
                style={{}}
              >
                <div className="card ">
                  <img
                    className="card-img"
                    src="http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg"
                    alt="Card image"
                    style={{ height: "75%", opacity: "0.1" }}
                  />
                  <div
                    className="card-img-overlay"
                    style={{ textAlign: "center" }}
                  >
                    <div style={{ margin: "auto", marginTop: "55%" }}>
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        renderStarIcon={() => (
                          <span className="" style={{ fontSize: "200%" }}>
                            ★
                          </span>
                        )}
                        value={rating}
                        onStarClick={this.onStarClick}
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body pl-0 pr-0">
                  <div className="row">
                    <div
                      className="col-sm-3 p-0"
                      style={{ textAlign: "center" }}
                    >
                      <div style={{ margin: "auto" }}>
                        <i
                          className="fa fa-cog fa-2x p-0 mx-3"
                          aria-hidden="true"
                          onClick={this.handleClick}
                        />
                      </div>
                    </div>
                    <div
                      className="col-sm-6 p-0"
                      style={{ textAlign: "center", fontSize: "20px" }}
                    >
                      <div style={{ margin: "auto" }}>{this.props.title}</div>
                    </div>
                    <div
                      className="col-sm-3 p-0 "
                      style={{ textAlign: "center" }}
                    >
                      <div style={{ margin: "auto" }}>
                        <i
                          className="fa fa-close fa-2x mx-3"
                          onClick={e => {
                            this.props.removeee(this.props.id);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        )}
      </div>
    );
  }
}
