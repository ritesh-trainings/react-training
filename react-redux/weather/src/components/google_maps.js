import React, { Component } from 'react';
// import GoogleMapLoader, { GoogleMap } from 'react-google-maps';

import { GoogleMap, Marker } from "react-google-maps"

export default (props) => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>)
// Map with a Marker

// class GoogleMap extends Component{
//     componentDidMount(){
//         new google.maps.Map(this.refs.map, {
//             zoom: 12,
//             center: {
//                 lat: this.props.lat,
//                 lng: this.props.lon
//             }
//         })
//     }
//     render(){
//         return (
//             <GoogleMapLoader container>

//             </GoogleMapLoader>
//             <div ref='map' />
//         )
//     }
// }

// export default GoogleMap;

// export default (props) => {
//     return (
//         <GoogleMapLoader containerElement={<div style={{ height: '100%' }} />}
//             googleMapElement={
//                 <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
//             } />
//     )
// }