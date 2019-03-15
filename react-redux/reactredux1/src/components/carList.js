import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions/my_action';
import { bindActionCreators } from 'redux';

class CarList extends Component {
    renderList() {
        return this.props.myCars.map((car) => {
            return (<li key={car.name} className='list-group-item' onClick={()=> this.props.selectCar(car)}>{car.name}</li>);
        });
    };

    render() {
        return (
            <ul className='list-group col-sm-4'>
                <li className='list-group-item text-muted'>Cars</li>
                {this.renderList()}
            </ul>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCar: selectCar }, dispatch);
}

function mapStateToProps(state) {
    return { myCars: state.cars }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarList);