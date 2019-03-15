import React, { Component } from 'react';

class Header extends Component {

    // <div className="row">
    //                     <div className="col-sm-2 " >
    //                         <img src="../../../img/nissan_digital_logo.svg" className="img-responsive" alt="" style={{ width: "80%" }} />
    //                     </div>
    //                     <div className="col-sm-10" >
    //                         <div className="row" style={{ marginTop: "2%" }}>

    //                             <div className="col-sm-7 offset-sm-2" >
    //                                 <h4 style={{ fontSize: "1.5vw" }}>NDH Employee Portal</h4>
    //                             </div>
    //                             <div className="col-sm-3" >
    //                                 <div className="row">
    //                                     <div className="col-sm-3" >
    //                                         <img src="../../../img/profile_picture.svg" className="img-responsive" alt="avatar" style={{ width: "100%" }} />
    //                                     </div>
    //                                     <div className="col-sm-9 text-light" >
    //                                         <h5 className='mt-1 font-weight-bold'> Welcome User</h5>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="border border-secondary rounded-0" style={{ marginTop: "-4%", marginLeft: "auto", marginRight:'0%', width: "83.5%" }}>
    //                 <nav className="navbar navbar-inverse ">
    //                     <div className="container-fluid">
    //                         <ul className="nav nav-fill" >
    //                             <li className="nav-item " style={{width:"8vw", background: "url('../../../img/home_bg.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}><a className="nav-link text-light text-center" href="" ><b>Home</b></a></li>
    //                             <li className="nav-item" ><a className="nav-link" href="" style={{ color: "black" }}>Compliance</a></li>
    //                             <li className="nav-item" ><a className="nav-link" href="" style={{ color: "black" }} >Network</a></li>
    //                             <li className="nav-item" ><a className="nav-link" href="" style={{ color: "black" }}>Survey</a></li>
    //                             <li className="nav-item" ><a className="nav-link" href="" style={{ color: "black" }}>Employee Directory</a></li>
    //                         </ul>
    //                         <ul className="nav navbar-right">
    //                             <li className="nav-item" style={{width:"20vw",backgroundImage: "url('../../../img/search_bg.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}><a className="nav-link text-body text-center" href="#" >Search</a></li>
    //                         </ul>
    //                     </div>
    //                 </nav>

    render() {
        return (
            <div className='container-fluid'>
                <img src="../../../img/header_top.svg" className="position-absolute img-responsive" alt="" style={{maxWidth:'98%'}}/>

            </div>
        )
    }
}
export default Header;