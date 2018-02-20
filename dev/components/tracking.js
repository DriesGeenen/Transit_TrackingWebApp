import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Map from "./gmap/map";

class Tracking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coordinates:[],
            counter:0
        };

        this.updateCoordinates = this.updateCoordinates.bind(this);
    }

    updateCoordinates(){
        if(this.state.counter+1 >= this.state.coordinates.length){
            return 0;
        }
        return this.state.counter+1;
    }

    componentDidMount() {
        axios.get('http://localhost:6609/trackings/code/'+this.props.match.params.trackingCode)
            .then(res => {
                return axios.get('http://localhost:6604/trackings/driver/'+res.data.driver)
            }).then((res) => {
            this.setState({coordinates: res.data.data});
        });

        var _this = this;
        this.intervalId = setInterval(function() {
            var newCounter = _this.updateCoordinates();
            _this.setState({counter: newCounter });
        }, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        var longitude = "";
        var latitude = "";

        if(this.state.coordinates.length > 0){
                longitude = parseFloat(this.state.coordinates[this.state.counter].longitude);
                latitude = parseFloat(this.state.coordinates[this.state.counter].latitude);
        }

        return (
            <div className="mapContainer">
                <h2>Your package is right here</h2>
                <div className="map marginLeftRight">
                    <Map
                        center={{lat: latitude, lng: longitude}}
                        zoom={15}
                    />
                    <Link to={`/`} className="btn btn-primary marginTop-20 orange darken-4">Terug</Link>
                </div>
            </div>
        );
    }
}

export default Tracking;