import React, { Component } from 'react';
export default class LeftNav extends Component {
    render() {
        return (
            <div className='card border bg-white shadow rounded-0'>
                <div className="list-group list-group-flush">
                    <a href="#homeSubmenu" className="list-group-item list-group-item-action active "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>Home
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span> Home 1</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 2</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 3</a>
                    </div>
                    <a href="#homeSubmenu2" className="list-group-item list-group-item-action "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>Homes
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu2" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span> Home 1</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 2</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 3</a>
                    </div>
                    <a href="#homeSubmenu3" className="list-group-item list-group-item-action "
                        data-toggle="collapse" aria-expanded="false" style={{ fontSize: '1.2em' }}><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='25px' /> </span>Homess
                            <span className='float-right'>
                            <img src="../../../img/plus.svg" alt="" width='18px' /> </span></a>
                    <div className="collapse list-group" id="homeSubmenu3" style={{ fontSize: '15px', marginLeft: '10%' }}>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}>
                            <img src="../../../img/shape.svg" alt="" width='15px' /> </span> Home 1</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 2</a>
                        <a href="#" className="list-group-item list-group-item-action font-weight-bold"><span style={{ marginRight: '10px' }}><img src="../../../img/shape.svg" alt="" width='15px' /> </span>Home 3</a>
                    </div>
                </div>
            </div>
        )
    }
}