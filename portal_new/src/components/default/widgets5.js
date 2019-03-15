import React, { Component } from "react";

class WidgetFive extends Component {

  constructor() {
    super();
    this.state = {
      head: "1",
      hover:"0"
    };
    this.heads = this.heads.bind(this);
    this.change=this.change.bind(this);
    this.changetwo=this.changetwo.bind(this);
  }

  change(){
    // var object = this.refs.hi;
    if(this.refs.hi)
    {
    this.refs.hi.className=  "col-sm-4 border border-secondary bg-primary rounded"
  }
  if(this.refs.he2)
  {
  this.refs.he2.className=  "col-sm-4 border border-secondary bg-primary rounded"
}   if(this.refs.hi3)
{
this.refs.hi3.className=  "col-sm-4 border border-secondary bg-primary rounded"
}

// console.log(this.refs.hi.className)
  }

  changetwo(){
    if(this.refs.hi)
    {
    this.refs.hi.className= "col-sm-4 border border-primary shadow bg-white rounded "
  }
  if(this.refs.he2)
  {
  this.refs.he2.className= "col-sm-4 border border-primary shadow bg-white rounded "
}
if(this.refs.hi3)
{
this.refs.hi3.className= "col-sm-4 border border-primary shadow bg-white rounded "
}
}

  heads(event) {
    // console.log(event.target.id)

    if (event.target.id == "1") {
      this.setState({ head: "1" })
    }
    if (event.target.id == "2") {
      this.setState({ head: "2" })

    }
    if (event.target.id == "3") {
      this.setState({ head: "3" })

    }
  }
  render() {
    return (
      <div className='card border border-primary shadow bg-white rounded p-2 m-3' style={{}}>


        <div className="input-group" style={{}}>
          <input
            type="text"
            className="form-control p-3"
            placeholder="Hi Welcome to Nissan's journey"
            readOnly
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-chevron-right fa-xs" />
            </span>
          </div>
        </div>


        <div className="container   mt-2 " style={{}} >


          <div className="row text-center">
            <button id="1" ref="hi" className="col-sm-4 border border-primary shadow bg-white rounded " onClick={this.heads} onMouseOver={this.change} onMouseOut={this.changetwo}>
              Announcement
        </button>

            <button id="2" ref="he2" className="col-sm-4 border border-primary shadow bg-white rounded " onClick={this.heads} onMouseOver={this.change} onMouseOut={this.changetwo}>
              What's New
        </button>


            <button id="3" ref="hi3" className="col-sm-4  border border-primary shadow bg-white rounded" onClick={this.heads} onMouseOver={this.change} onMouseOut={this.changetwo}>
              Global Nissan
        </button>


          </div>



        </div>

        <hr></hr>


        <div
          className="card border border-primary shadow bg-white rounded p-2 m-3"
          style={{}}
        >
          {(this.state.head == "1" && <img
            className="card-img-top"
            src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/altima/IIHS_Altima.jpg.ximg.l_full_m.smart.jpg"
            alt="Card image cap"
          />)}
          {(this.state.head == "2" && <img
            className="card-img-top"
            src="https://cms.technopark.org/zcmspg/zupload/media/web_media/5363/1530351628624_nissan-digital-pic-03.jpg"
            alt="Card image cap"
          />)}
          {(this.state.head == "3" && <img
            className="card-img-top"
            src="https://periodismodelmotor.com/wp-content/uploads/2015/10/nissan-ids-concept-36.jpg"
            alt="Card image cap"
          />)}




          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 p-0">

                  {(this.state.head == "1" && <input
                    type="text"
                    className="form-control border-0 "
                    placeholder="New Nissan Altima"
                    readOnly
                    style={{ backgroundColor: '#FFFFFF' }}
                  />)}

                  {(this.state.head == "2" && <input
                    type="text"
                    className="form-control border-0 "
                    placeholder="Nissan Digital hub"
                    readOnly
                    style={{ backgroundColor: '#FFFFFF' }}
                  />)}

                  {(this.state.head == "3" && <input
                    type="text"
                    className="form-control border-0 "
                    placeholder="Nissan automated cars"
                    readOnly
                    style={{ backgroundColor: '#FFFFFF' }}
                  />)}

                </div>
                <div className="col-sm-4 p-0">

                  <button
                    type="text"
                    className="form-control "
                    placeholder="Comment Here"
                    readOnly
                    style={{ backgroundColor: '#FFFFFF' }}
                  >Know More</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WidgetFive;
