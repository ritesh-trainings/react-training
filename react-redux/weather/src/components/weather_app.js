import React, {Component} from 'react';
import SearchBar from './search_bar';
import WeatherDetails from './weather_details';

export default class WeatherApp extends Component{
    render(){
        return (
            <div className='container text-sm-center'>
                <h2 className='my-4'>Welcome to Weather App</h2>
                <hr/>
                <SearchBar/>
                <hr/>
                <WeatherDetails />
            </div>
        )
    }
}