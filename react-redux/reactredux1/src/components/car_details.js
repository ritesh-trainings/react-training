import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetails extends Component {
    render() {
        return (
            <div className='col-sm-8'>
                <h3>Car Details</h3>
                <div className='card'>
                    {this.props.car && <div className='card-title'>
                        {this.props.car.name}
                    </div>}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        car: state.activeCar
    }
}

export default connect(mapStateToProps)(CarDetails);