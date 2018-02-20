import React, { Component } from 'react';
import axios from 'axios';
import Map from "./gmap/map";

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
                return axios.get('http://localhost:6604/trackings/driver/'+res.data.driver)
            }).then((res) => {
            this.setState({coordinates: res.data.data});
        });
    }

    render() {
        var longitude = "";
        var latitude = "";

        if(this.state.coordinates.length > 0){
                longitude = parseFloat(this.state.coordinates[0].longitude);
                latitude = parseFloat(this.state.coordinates[0].latitude);
        }

        return (
            <div className="mapContainer">
                <h2>Your package is right here</h2>
                <div className="map marginLeftRight">
                    <Map
                        center={{lat: latitude, lng: longitude}}
                        zoom={15}
                    />
                </div>
            </div>
        );
    }
}

export default Tracking;