import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer >
                <nav className="navbar navbar-inverse footer ">
                <div className="container-fluid" style={{backgroundColor:"#7AB4D8"}}> 
                        <ul className="nav justify-content-center text-center" style={{textAlign:"center",width:"100%"}}>
                            <li className="nav-item"><a  className="nav-link"  href="https://www.nissan.in/" target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Nissan Website</a></li>
                            <li className="nav-item" ><a className="nav-link" href="https://www.nissan.in/privacy.html" target="_blank"  rel="noopener noreferrer" style={{color:"white"}}>Privacy Policy</a></li>
                            <li className="nav-item" ><a className="nav-link" href="https://www.nissan.in/copyright.html" target="_blank" rel="noopener noreferrer"  style={{color:"white"}}>Copyright & Disclamer</a></li>
                        </ul>
                    </div>
                </nav>
            </footer>
        )
    }
}