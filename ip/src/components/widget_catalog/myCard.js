import React, { Component } from 'react'

export default class MyCard extends Component {
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


        //             "columns": {
        //                 "column-1": {
        //                     "id": "column-1",
        //                     "taskIds": "['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7']"
        //                 }
        //             },
        //             "columnOrder": "['column-1']"
        //         }
        //         }
        //     }
        // }
        return (
            <div>
                {this.state.term.map((val, key) =>
                    <div className="card bg-light" style={{marginBottom:'5px', borderRadius:'0px'}}>
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
        )
    }
}