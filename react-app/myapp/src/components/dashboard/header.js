import React from 'react';

const Header = ({myname,lname}) => <h3>Welcome {lname}, {myname}</h3>;

Header.defaultProps = {
    lname:'Mukim',
}

export default Header;