import React, { Component } from 'react';
import classNames from 'classnames';

import styles from '../../css/dashboard/leftNav.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class LeftNavigation extends Component {


    openNav() {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "220px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "50";
        document.getElementById("main").style.marginLeft = "70";
    }


    render() {
        console.log(styles);
        return (<div className='row' style={{ 'position': 'relative', 'height': '650px' }}>
            <div id="mySidenav" className={['card', 'col-sm-3', styles.sidenav].join(' ')} style={{overflowX:'hidden', wordWrap: 'unset'}}>
            {/*} className={styles.sidenav}>*/}
                {/*<a href='javascript.void(0)' className={styles.closebtn} onClick={this.closeNav}>&times;</a>*/}
                <ul className="list-unstyled ml-0">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div id="main" className='col-sm-9'>
                <h2>Sidenav Push Example</h2>
            </div>
        </div >
        )
    }
}