import React, { Component } from "react";
import WidgetOne from "./widget1";
import WidgetTwo from "./widget2";
import WidgetThree from "./widget3";
import WidgetFour from "./widget4";
import WidgetFive from "./widgets5";
import WidgetOneOne from "./widget11";
import WidgetOneOneOne from "./widget111";



class DefaultPage extends Component {
  render() {
    return (
      // <div>
      //   <WidgetOne />
      //   <WidgetTwo />
      //   <WidgetThree/>
      //   <WidgetFour/>
      //   <WidgetFive/>

      // </div>

      <div className="container border border-secondary shadow bg-white p-1 m-1">
        <div className="row mt-3">
          <div className="col-sm-5 mr-3">
            <WidgetFour />
            <WidgetOneOne />
            <WidgetOneOneOne />
            <WidgetOneOneOne />


          </div>
          <div className="col-sm-6 border border-secondary shadow bg-white rounded pt-1">
            <WidgetFive />
            <div className="row p-1">
              <div className="col-sm-6 border border-secondary shadow bg-white rounded">
                <WidgetTwo />
              </div>
              <div className="col-sm-6 border border-secondary shadow bg-white rounded">
                <WidgetThree />
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default DefaultPage;
