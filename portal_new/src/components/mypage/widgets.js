import React, { Component } from 'react';
import Try from './try';

var jsn = [
    {
        'name': 'Nissan History',
        'link': 'https://wallpapercave.com/wp/LBOjFRk.jpg',
        'img': 'https://wallpapercave.com/wp/LBOjFRk.jpg'
    },
    {
        'wname': 'CWT',
        'link': 'https://wallpapercave.com/wp/LBOjFRk.jpg',
        'img': 'https://image3.mouthshut.com/images/imagesp/925752767s.jpg'
    }
]

class WidgetsFlip extends Component {

    render() {
        return (
            <div style={{ marginTop: '10%' }}>
                <div class="container">
                    <div className="row">

                        <div className="col"><Try title={'Card 1'} link={'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg'} /></div>
                        <div className="col"><Try title={'Card 2'} link={'http://2.bp.blogspot.com/-TCLT60bpAR8/UlzWQayTvQI/AAAAAAAACLc/0hhlHhGmq_U/s1600/nissan_logo_feature.jpg'} /></div>
                        {/* <div className="w-100"></div>
    <br /><br /><br /><br /><br /><br /><br /><br /> */}
                        {/* <div className="col"><Try /></div>
    <div className="col"><Try /></div> */}
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default WidgetsFlip;