import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import styles from '../../css/dashboard/dashboard.css';
import Header from './header';
import Body from './body'
import LeftNav from './left_nav';
import ErrorPage from '../error_page';

export default class Dashboard extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div className={['container-fluid', styles.dashboard].join(' ')}>
                <Header />
                <h3>Welcome to Dashboard</h3>
                <div className='row mx-4'>
                    <div className="col-sm-3">
                        <LeftNav />
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path={`${this.props.match.url}/:userId`} component={Body} />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}