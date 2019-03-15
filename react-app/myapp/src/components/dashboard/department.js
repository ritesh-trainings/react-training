import React, {Component} from 'react';

class Department extends Component{
    constructor(props){
        super(props);
        this.showAllDepartment = this.showAllDepartment.bind(this);
    }
    showAllDepartment(){
        console.log("All Department: ",this.props.dept);
    }
    render(){
        return (
            <div>
                <h4>Department</h4>
                <button onClick={this.showAllDepartment}>Show All</button>
            </div>
        )
    }
}

export default Department;