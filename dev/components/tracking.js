import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Tracking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coordinates:[],
            longitude:'',
            latitude:'',
            test:''
        };

    }

    componentDidMount() {
        axios.get('http://localhost:6609/trackings/code/'+this.props.match.params.trackingCode)
            .then(res => {
                return axios.get('http://localhost:6604/trackings/truck/'+res.data.truck)
            }).then((res) => {
            this.setState({coordinates: res.data.data});
        });
    }

    render() {
        var longitude = "";
        var latitude = "";

        if(this.state.coordinates.length > 0){
                longitude = this.state.coordinates[0].longitude;
                latitude = this.state.coordinates[0].latitude;
        }

        return (
            <div className="mapContainer">
                <h2>Your package is right here</h2>
                <div className="map marginLeftRight">
                    <p>long: {longitude}</p>
                    <p>lat: {latitude}</p>
                    <p>API key: AIzaSyCbSNwXoqqQUrdoT9u4atyjzS5S3mcrG0w</p>
                </div>
            </div>
        );
    }
}

export default Tracking;