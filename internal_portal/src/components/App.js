import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import ErrorPage from "./error_page";

import Header from './dashboard/header';
import Body from './dashboard/body'
import LeftNav from './dashboard/left_nav';
import Footer from './dashboard/footer';
import Login from './login/login';

import '../css/portal.css';

class InternalPortal extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Login />
            </div>
        )
    }
}
//                 <BrowserRouter>
//                     <Switch>
//                         <Route path='/portal' Component={Body}/>
//                         <Route component={ErrorPage}/>
//                     </Switch>
//                 </BrowserRouter>
//             </div>
//         )
//     }
// }

// render={() => (
//     <div>
//         <Header />
//         <div className='row ml-2 my-2'>
//             <div className='col-sm-2'>
//                 <LeftNav />
//             </div>
//             <div className='col-sm-10'>
//                 <Route exect path='/portal/' component={Body} />
//                 <Route exact path='/portal/z001' component={Body} />
//             </div>
//         </div>
//         <Footer />
//     </div>
// )} />

export default connect()(InternalPortal);