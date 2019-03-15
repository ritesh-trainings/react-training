import React, { Component } from 'react'
import MyCard from './myCard';

export default class MyCardCatalog extends Component {
    
    render() {
        this.state= {
            
        }
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card text-center" style={{ padding: '10px', marginTop: '', backgroundColor: 'lightgray' }}>
                            <h5 className="card-title" style={{ marginBottom: '5px' }}>Widgets List</h5>
                        </div>
                    </div>

                    <ul className="nav nav-pills mx-auto" role="tablist">
                        <li className="nav-item border border-dark text-center"  style={{marginRight:'', width:'100px'}}>
                            <a className="nav-link active" data-toggle="pill" href="#home" style={{color:'black', borderRadius: '0px'}}> All </a>
                        </li>
                        <li className="nav-item border border-dark text-center" style={{width:'100px'}}>
                            <a className="nav-link" data-toggle="pill" href="#menu1" style={{color:'black', borderRadius: '0px'}}>Popular</a>
                        </li>
                    </ul>

                    <div className="card-body" style={{overflowY:'scroll',maxHeight:'600px'}}>
                        <MyCard />
                    </div>
                </div>
            </div>
        )
    }
}
