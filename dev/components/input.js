import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trackingCode:''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        const { trackingCode } = this.state;
        var output;

        if(trackingCode === ""){
            output = "";
        } else {
            output = (
                <Link to={`/tracking/` + trackingCode} className="btn btn-primary orange darken-4">Show my package</Link>
            );
        }

        return (
            <div className="center-div">
                <h2>Where's my package?</h2>
                <div className="form-group marginLeftRight">
                    <label htmlFor="trackingCode">Tracking code:</label>
                    <input type="text" className="form-control input-field center" name="trackingCode" value={trackingCode} onChange={this.onChange} placeholder="tracking code" />
                </div>
                {output}
            </div>
        );
    }
}

export default Input;