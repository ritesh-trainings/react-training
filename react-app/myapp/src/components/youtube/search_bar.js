import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    // searchVideo(event){
    //     const term = event.target.elements.search.value.trim();
    //     this.onInputChange(term);
    // }

    //onSubmit={this.searchVideo}>

    render() {
        return (
            <form className="form-inline" >
                <div className="form-group">
                    <input type="text" className="form-control" name="search" id="search" placeholder="Search" onChange={event => this.onInputChange(event.target.value.trim())} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        )
    }
}

export default SearchBar;