import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import ErrorPage from "./error_page";

import Dashboard from './components/dashboard/dashboard';

class InternalPortal extends Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <Switch>
                        <Route path='/portal/:userId' component={Dashboard} />
                        <Route component={ErrorPage}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect()(InternalPortal);