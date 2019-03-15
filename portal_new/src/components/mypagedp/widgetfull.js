import React, { Component } from 'react';

class WidgetsFlip extends Component {

    constructor() {
        super();
        this.state = {

        }
    }


    render(props) {
        console.log("propsfromdash", this.props.widg)
        const WidgetDash=this.props.widg.map((val)=>{
            return             <div
            className="card border border-primary shadow bg-white rounded p-2 mb-2 mt-2 mr-3 ml-4 col-5"
            style={{}}
        >
            <img
                className="card-img-top"
                src={val.link}
                alt="Card image cap"
                style={{height:"75%"}}
            />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 p-0">
                            <i
                                className="fa fa-cog fa-2x p-0"
                                aria-hidden="true"
                                onClick={this.onlike}
                            />
                        </div>
                        <div className="col-sm-8">
                        {val.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    )
        return (
            <div className="row">
            {WidgetDash}
            </div>
        );


    }
}


export default WidgetsFlip;
