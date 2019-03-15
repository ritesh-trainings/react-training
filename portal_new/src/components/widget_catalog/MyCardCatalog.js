import React, { Component } from 'react'
// import MyCard from './myCard';

export default class MyCardCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: [
                { "id": "task-1", "title": "HR & Travel", "content": "All HR active Page" },
                { "id": "task-2", "title": "JIRA", "content": "Jira Ticket Status" },
                { "id": "task-3", "title": "My Travel Status", "content": "Travel Widget" },
                { "id": "task-4", "title": "Leave", "content": "Leave Widget" },
                { "id": "task-5", "title": "News", "content": "News Widget" },
                { "id": "task-6", "title": "Accomodation", "content": "Accomodation Widget" },
                { "id": "task-6", "title": "Accomodation1", "content": "Accomodation Widget" },
                { "id": "task-6", "title": "Accomodation2", "content": "Accomodation Widget" },
                { "id": "task-6", "title": "Accomodation3", "content": "Accomodation Widget" }
            ],
        };
    }

    render() {
        // this.state = {

        // }
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card text-center" style={{ padding: '10px', marginTop: '', backgroundColor: 'lightgray' }}>
                            <h5 className="card-title" style={{ marginBottom: '5px' }}>Widgets List</h5>
                        </div>
                    </div>

                    <ul className="nav nav-pills mx-auto" role="tablist">
                        <li className="nav-item border border-dark text-center" style={{ marginRight: '', width: '100px' }}>
                            <a className="nav-link active" data-toggle="pill" href="#home" style={{ color: 'black', borderRadius: '0px' }}> All </a>
                        </li>
                        <li className="nav-item border border-dark text-center" style={{ width: '100px' }}>
                            <a className="nav-link" data-toggle="pill" href="#menu1" style={{ color: 'black', borderRadius: '0px' }}>Popular</a>
                        </li>
                    </ul>

                    <div className="card-body" style={{ overflowY: 'scroll', maxHeight: '600px' }}>
                        {/* <MyCard /> */}
                        <div>
                            {this.state.term.map((val, key) =>
                                <div className="card bg-light" style={{ marginBottom: '5px', borderRadius: '0px' }}>
                                    <div className="card-body d-flex" style={{ padding: '5px' }}>
                                        <img style={{ height: '50px', width: '50px', marginLeft: '10px' }} src="../../../img/contact.svg" alt="img" />
                                        <div style={{ marginLeft: '20px' }}>
                                            <h6 className="card-title" style={{ marginBottom: '5px' }}>
                                                {val.title}
                                            </h6>
                                            <p className="card-text small">{val.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>



                        {/* <MyCard/> */}
                    </div>
                </div>
            </div>
        )
    }
}
