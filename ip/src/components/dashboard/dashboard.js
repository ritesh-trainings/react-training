import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavHeader from './navlink';
import Header from './header';
import Body from './body'
import LeftNav from './left_nav';
import Footer from './footer';
import Widgets from '../widget_catalog/home';
import DefaultPage from '../default/widgets';
import WidgetsFlip from '../mypage/widgets';

import { fetchCatalog, fetchUserData } from '../../actions/actions';

class Dashboard extends Component {

    componentWillMount(props) {
        this.props.fetchCatalog();
        this.props.fetchUserData(this.props.match.params.userId);
        console.log('props2:', this.props);
    }
    // <NavHeader />
    // <Switch>
    // <Route path={`${this.props.match.url}/home`} component={DefaultPage} />
    // <Route path={`${this.props.match.url}/mypage/:pageId`} component={Body} />
    // <Route path={`${this.props.match.url}/widgets`} component={Widgets} />
    // </Switch>
    render() {
        console.log('props', this.props.match.params.userId);
        return (
            <div className='container-fluid'>
                <Header />
                <div className='row my-2'>
                    <div className="col-sm-2">
                        <LeftNav />

                    </div>
                    <div className="col col-sm-7">
                        <NavHeader />
                        <Switch>
                            <Route path={`${this.props.match.url}/home`} component={DefaultPage} />
                            <Route path={`${this.props.match.url}/mypage/:pageId`} component={WidgetsFlip} />
                        </Switch>
                    </div>
                    <div className="col-sm-3">
                        <Widgets />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userData,
        catalog: state.catalog
    }
}

function mapDispatchToProps(dispatch) {
    return new bindActionCreators({
        fetchCatalog: fetchCatalog,
        fetchUserData: fetchUserData
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);