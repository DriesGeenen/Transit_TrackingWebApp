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

        return (
            <div className="center-div">
                <h2>Where's my package?</h2>
                <div className="form-group marginLeftRight">
                    <label htmlFor="trackingCode">Tracking code:</label>
                    <input type="text" className="form-control" name="trackingCode" value={trackingCode} onChange={this.onChange} placeholder="tracking code" />
                </div>
                <button className="btn btn-primary"><Link to={`/tracking/` + trackingCode}>Toon mijn pakketje</Link></button>
            </div>
        );
    }
}

export default Input;