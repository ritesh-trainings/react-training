import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/api_call'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    };

    render() {
        return (
            <div className='my-4'>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row justify-content-md-center ">
                        <div className="col col-lg-5">
                            <input type="text" className="form-control" placeholder="Enter Place" onChange={this.onInputChange} value={this.state.term} autoFocus />
                        </div>
                        <div className="col-lg-3">
                            <button type='submit' className='btn btn-danger' >Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);