import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './charts';

class WeatherDetails extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const loc = cityData.city.coord;
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{cityData.list[0].main.temp}</td>
                <td>{cityData.list[0].main.pressure}</td>
                <td>{cityData.list[0].main.humidity}</td>
                <td><Chart data={temps} color='orange' units='K' /></td>
                <td><Chart data={pressures} color='green' units='hPa' /></td>
                <td><Chart data={humidities} color='black' S units='%' /></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                {this.props.weather.length > 0 && <h3 className='my-3'>Welcome to Weather Details</h3>}
                {this.props.weather.length > 0 &&
                    <table className='table table-hover table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Temperature (C)</th>
                                <th>Pressure (hPA)</th>
                                <th>Humidity (%)</th>
                                <th>Temperature Range (C)</th>
                                <th>Pressure Range (hPA)</th>
                                <th>Humidity Range (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.weather.map((detail) => this.renderWeather(detail))}
                        </tbody>
                    </table>}
            </div>
        )
    }
}


// {JSON.stringify(this.props.weather)}

function mapStateToProps(state) {
    //console.log(state);
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherDetails);