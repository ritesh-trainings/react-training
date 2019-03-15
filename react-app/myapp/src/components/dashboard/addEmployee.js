import React, {
    Component
} from 'react';

class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.addEmployee = this.addEmployee.bind(this);
        this.state = {
            error: undefined
        }
    }

    addEmployee(event) {
        event.preventDefault();
        const data = {
            id: event.target.elements.id.value.trim(),
            name: event.target.elements.name.value.trim(),
            email: event.target.elements.email.value.trim()
        }
        const error = this.props.addEmployee(data);
        console.log("Add Emp", data);
        this.setState(()=>({
            error: error
        }));
    }
    render() {
        return ( 
            <div>
            {this.state.error && <p style={{color:"red"}}>{this.state.error}</p>}
                <form onSubmit={ this.addEmployee }>
                    <input type="number" name="id" id="id" placeholder="Enter Employee Id" />
                    <input type="text" name="name" id="name" placeholder="Enter Name" />
                    <input type="email" name="email" id="email" placeholder="Enter Email Id" />
                    <button type="submit"> add </button> 
                </form>
            </div> 
        )
    }
}

export default AddEmployee;