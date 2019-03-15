import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';
import UserDetails from './userDetails';
import Products from './products';
import YouTubeApp from './youtube/youtube';
import ErrorPage from './error-page';
import NavHeader from './navHeader';

const MainRouter = () => (
    <BrowserRouter>
        <div>
            <NavHeader />
            <Switch>
                <Route path='/' component={Login} exact={true} />
                <Route path='/register' component={Register} />
                <Route path='/userDetails' component={UserDetails} />
                <Route path='/youtube' component={YouTubeApp}/>
                <Route path='/products' component={Products} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default MainRouter;