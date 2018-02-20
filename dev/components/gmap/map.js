import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import withScriptjs from "react-google-maps/lib/withScriptjs"

class Map extends React.Component{
    constructor(props){
        super(props);

    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.center.lat === nextProps.center.lat){
            return false
        }else{
            return true
        }
    }

    render(){
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.props.center.lat, lng: this.props.center.lng }}
                    >
                        <Marker position={{ lat: this.props.center.lat, lng: this.props.center.lng }} />
                    </GoogleMap>
                )
            )
        );

        var map;
        if(this.props.center.lat !== undefined){
            map = <AsyncMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbSNwXoqqQUrdoT9u4atyjzS5S3mcrG0w"
                loadingElement={
                    <div style={{ height: `100%` }} />
                }
                containerElement={
                    <div style={{ height: '300px' }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
        }else{
            map = <div style={{height: '300px'}} />
        }
        return(map)
    }
}

export default Map