import React, { Component } from 'react';
export default class LeftNav extends Component {
    render() {
        return (
            <div className='card border bg-white shadow rounded-0'>
                <div className="list-group list-group-flush">
                    <a href="#homeSubmenu" className="list-group-item list-group-item-action active "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>HR
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span>CSR</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Leave</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>ESS</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Onboarding</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Offer Letter</a>
                    </div>
                    <a href="#homeSubmenu2" className="list-group-item list-group-item-action "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>Finance
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu2" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span>Pay Slips</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>TDS</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Reimbursement</a>
                    </div>
                    <a href="#homeSubmenu3" className="list-group-item list-group-item-action "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>IT
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu3" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span>Infrastructure</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Request</a>
                        <a href="" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Contacts</a>
                    </div>
                </div>
            </div>
        )
    }
}