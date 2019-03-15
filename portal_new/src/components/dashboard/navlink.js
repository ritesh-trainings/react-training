import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <a class="nav-link" ><NavLink to={`/portal/Z001/home`} class="dropdown-item" exact={true}>Home</NavLink> <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Pages
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to={`/portal/Z001/mypage/1`} class="dropdown-item" exact={true}>Page 1</NavLink>

                    </div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link">Shared</a>
                </li>
            </ul>

        </div>
    </nav>





)

export default NavHeader;


// <header>
// <NavLink to={`${this.props.match.url}/home`} exact={true}>Login</NavLink>
// <NavLink to={`${this.props.match.url}/home`} >Register</NavLink>
// <NavLink to='/userDetails'>User Details</NavLink>
// <NavLink to='/products'>Products</NavLink>
// <NavLink to='/youtube'>YouTube</NavLink>
// </header>