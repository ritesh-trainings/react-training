import React, { Component } from 'react';
import Try from './try';

// var jsn = [
//     {
//         'name': 'Nissan History',
//         'link': 'https://wallpapercave.com/wp/LBOjFRk.jpg',
//         'img': 'https://wallpapercave.com/wp/LBOjFRk.jpg'
//     },
//     {
//         'wname': 'CWT',
//         'link': 'https://wallpapercave.com/wp/LBOjFRk.jpg',
//         'img': 'https://image3.mouthshut.com/images/imagesp/925752767s.jpg'
//     }
// ]




class WidgetsFlip extends Component {

    constructor() {
        super();
        this.state = {
            widgetdash: [
                // { "id": "task-1", "title": "HR & Travel", "content": "All HR active Page", 'link': 'https://wallpapercave.com/wp/LBOjFRk.jpg', 'img': 'https://wallpapercave.com/wp/LBOjFRk.jpg' },
                // { "id": "task-2", "title": "JIRA", "content": "Jira Ticket Status" },
                // { "id": "task-3", "title": "My Travel Status", "content": "Travel Widget" },
                // { "id": "task-4", "title": "Leave", "content": "Leave Widget" },
                // { "id": "task-5", "title": "News", "content": "News Widget" },
                // { "id": "task-6", "title": "Accomodation", "content": "Accomodation Widget" },
                // { "id": "task-6", "title": "Accomodation1", "content": "Accomodation Widget" },
                // { "id": "task-6", "title": "Accomodation2", "content": "Accomodation Widget" },
                // { "id": "task-6", "title": "Accomodation3", "content": "Accomodation Widget" }
                { "id": "task-1", "title": "HR & Travel", "content": "All HR active Page", 'link': 'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg', 'img': 'https://wallpapercave.com/wp/LBOjFRk.jpg' },
                { "id": "task-2", "title": "HR & Travel2", "content": "All HR active Page2", 'link': 'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg', 'img': 'https://wallpapercave.com/wp/LBOjFRk.jpg' },

            ],
        };

    }

    render(props) {
        console.log("propsfromdash",this.props.widg)
        const WidgetDash=this.props.widg.map((val)=>{
            return <div className="col"><Try key={val.id} title={val.title} link={val.link}/></div>
        }
    )
        return (
            <div style={{ marginTop: '10%' }}>
                <div class="container">
                    <div className="row">
                     {/* <div className="col"><Try title={this.state.widgetdash[0].title} link={'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg'} /></div>
                     <div className="col"><Try title={this.state.widgetdash[1].title} link={'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg'} /></div> */}

                        {/* {this.state.widgetdash.map((val,id) => {
                            <div className="col"><Try key={val.title} wid={val} />
                             {console.log("this is the array",val.title,id)}</div> */}
                          {WidgetDash}  
                             {/* <div className="col"><Try title={this.state.widgetdash[1].title} link={'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg'} /></div> */}
                            {/* <div className="w-100"></div>
    <br /><br /><br /><br /><br /><br /><br /><br /> */}
                            {/* <div className="col"><Try /></div>
    <div className="col"><Try /></div> */}
                        {/* // {  */}

                        {/* })}  */}
                    </div>


                </div>

            </div>
        );
    }
}

export default WidgetsFlip;