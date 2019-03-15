import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        console.log('Active Book :', this.props.active);
        return (
            <div className='card col-sm-8'>
                <div h3>Book Details</div>
                {this.props.active && <div className='card-title'>{this.props.active.title}</div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        active: state.activeBook
    }
};

export default connect(mapStateToProps)(BookDetails);

