import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => (
    <header>
        <NavLink to='/' exact={true}>Login</NavLink>
        <NavLink to='/register' >Register</NavLink>
        <NavLink to='/userDetails'>User Details</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/youtube'>YouTube</NavLink>
    </header>
)

export default NavHeader;