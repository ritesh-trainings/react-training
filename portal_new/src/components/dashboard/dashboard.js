import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NavHeader from "./navlink";
import Header from "./header";
import Body from "./body";
import LeftNav from "./left_nav";
import Footer from "./footer";
import DefaultPage from "../default/widgets";
import WidgetsFlip from "../mypagedp/widgets";
import { fetchCatalog, fetchUserData } from "../../actions/actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.dragstart = this.dragstart.bind(this);
    this.ondrop = this.ondrop.bind(this);
    this.ondragover = this.ondragover.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.populP = this.populP.bind(this);
    this.populA = this.populA.bind(this);


    this.a = 1500;
    

    this.state = {
      term: [
        {
          id: "task-1",
          title: "HR & Travel",
          content: "All HR active Page",
          link:
            "http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg",
          img:
            "http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg",
          popularity: 2
        },
        {
          id: "task-2",
          title: "HR & Travel",
          content: "All HR active Page",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 3
        },
        {
          id: "task-3",
          title: "My Travel Status",
          content: "Travel Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 5
        },
        {
          id: "task-4",
          title: "Leave",
          content: "Leave Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 4
        },
        {
          id: "task-5",
          title: "News",
          content: "News Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 2
        },
        {
          id: "task-6",
          title: "Accomodation",
          content: "Accomodation Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 5
        },
        {
          id: "task-7",
          title: "Accomodation1",
          content: "Accomodation Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 3
        },
        {
          id: "task-8",
          title: "Accomodation2",
          content: "Accomodation Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 5
        },
        {
          id: "task-9",
          title: "Accomodation3",
          content: "Accomodation Widget",
          link: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          img: "https://wallpapercave.com/wp/LBOjFRk.jpg",
          popularity: 5
        }
      ],

      popular: [
      
      ],

      widlist: [],

      dummy: [],

      popu:false
    };
  }

  componentWillMount(props) {
    //   console.log("dasdasdasdas");  
    //   console.log(this.state.term,"popularpopprender")

    // this.setState({popular:this.state.term})
    // console.log(this.state.popular,"popularpopprender")


    this.props.fetchCatalog();
    this.props.fetchUserData(this.props.match.params.userId);
    console.log("props2:", this.props);
  }

  dragstart(ev) {
    // ev.preventDefault();
    console.log("dragging" + ev.target.id);
    this.a = ev.target.id;
  }

  ondrop(ev) {
    // ev.preventDefault();
    console.log("dropped", this.a);
    this.state.term.map((val, key) => {
      if (val.id == this.a) {
        console.log("success", val);
        this.setState(prevState => ({
          widlist: [...prevState.widlist, val]
        }));
      }
    });

    this.state.dummy = [...this.state.term];

    this.setState(() => {
      return {
        term: [],
        popular:[]
      };
    });
    this.state.dummy.map((val, key) => {
      if (val.id !== this.a) {
        console.log("successINDUMMY", val);
        this.setState(prevState => ({
          term: [...prevState.term, val],
          popular:[...prevState.popular,val]
        }));
      }
    });

    this.a = 1500;
  }

  ondragover(ev) {
    ev.preventDefault();
    console.log("dragover" + ev.target.className);
  }

  populA(ev){
  this.setState({popu:false})
  this.setState({term:[...this.state.popular]})
  console.log(this.state.term,"termpopp")
  console.log(this.state.popular,"popularpopp")
  }

  
  populP(ev){
    this.setState({popu:true})
    this.setState({popular:[...this.state.term]})
    this.state.term.sort(function(obj2,obj1){
        return obj1.popularity - obj2.popularity
    });
    console.log(this.state.term,"termpopp")
    console.log(this.state.popular,"popularpopp")



  }

  deleteItem(itemid) {
    console.log("itemtoremoveis removed" + itemid);
    console.log("current state is" + this.state.widlist[0].id);
    

    this.state.widlist.map((val, key) => {
      if (val.id == itemid) {
        console.log("successwildlist", val);
        this.setState(prevState => ({
          term: [...prevState.term, val],
          popular:[...prevState.popular, val]
        }));
      }
    });

    this.setState(prevState => {
      return {
        widlist: prevState.widlist.filter(itm => itemid !== itm.id)
      };
    });
  }

  // <NavHeader />
  // <Switch>
  // <Route path={`${this.props.match.url}/home`} component={DefaultPage} />
  // <Route path={`${this.props.match.url}/mypage/:pageId`} component={Body} />
  // <Route path={`${this.props.match.url}/widgets`} component={Widgets} />
  // </Switch>
  render() {
    console.log("props", this.props.match.params.userId);
    console.log("Widgetlistdashboard", this.state.widlist);



    return (
      <div className="container-fluid">
        <Header />
        <div className="row my-2">
          <div className="col-sm-2">
            <LeftNav />
          </div>
          <div className="col col-sm-7">
            <div className="row">
              <div className="col-sm-12">
                <NavHeader />
              </div>
              <div
                className="container"
                onDrop={this.ondrop}
                onDragOver={this.ondragover}
                style={{ minHeight: "500px" }}
              >
                <Switch>
                  <Route
                    path={`${this.props.match.url}/home`}
                    component={DefaultPage}
                  />
                  <Route
                    path={`${this.props.match.url}/mypage/:pageId`}
                    component={() => (
                      <WidgetsFlip
                        widg={this.state.widlist}
                        removee={this.deleteItem}
                      />
                    )}
                  />
                </Switch>
                {/* <WidgetsFlip widg={this.state.widlist} removee={this.deleteItem}/> */}
              </div>
            </div>
          </div>
          {!window.location.href.includes("home") && (
            <div className="col-sm-3">
              <div>
                <div className="card">
                  <div className="card-body">
                    <div
                      className="card text-center"
                      style={{
                        padding: "10px",
                        marginTop: "",
                        backgroundColor: "lightgray"
                      }}
                    >
                      <h5
                        className="card-title"
                        style={{ marginBottom: "5px" }}
                      >
                        Widgets List
                      </h5>
                    </div>
                  </div>

                  <ul className="nav nav-pills mx-auto" role="tablist">
                    <li
                      className="nav-item border border-dark text-center"
                      style={{ marginRight: "", width: "100px" }}
                    >
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#home"
                        style={{ color: "black", borderRadius: "0px" }}
                        onClick={this.populA}
                      >
                      
                        All
                        {/* {console.log(this.popu,"popu")} */}

                      </a>
                    </li>
                    <li
                      className="nav-item border border-dark text-center"
                      style={{ width: "100px" }}
                    >
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#menu1"
                        style={{ color: "black", borderRadius: "0px" }}
                        onClick={this.populP}
                      >
                        Popular
                      </a>
                    </li>
                  </ul>

                  {console.log(this.state.popu,"popu inside")}
                  
                  <div
                    className="card-body"
                    style={{ overflowY: "scroll", maxHeight: "600px" }}
                  >
                    {/* {console.log(window.location.href,"current url")} */}

                    {/* <MyCard /> */}
                    <div>
                      {this.state.term.map((val, key) => (
                        <div
                          className="card bg-light"
                          style={{ marginBottom: "5px", borderRadius: "0px" }}
                        >
                          <div
                            className="card-body d-flex"
                            id={val.id}
                            draggable="true"
                            onDragStart={this.dragstart}
                            style={{ padding: "5px" }}
                          >
                            <img
                              style={{
                                height: "50px",
                                width: "50px",
                                marginLeft: "10px"
                              }}
                              src="../../../img/contact.svg"
                              alt="img"
                            />
                            <div style={{ marginLeft: "20px" }}>
                              <h6
                                className="card-title"
                                style={{ marginBottom: "5px" }}
                              >
                                {val.title}
                              </h6>
                              <p className="card-text small">{val.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <MyCard/> */}
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    catalog: state.catalog
  };
}

function mapDispatchToProps(dispatch) {
  return new bindActionCreators(
    {
      fetchCatalog: fetchCatalog,
      fetchUserData: fetchUserData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
