import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import Employees from './employees';
import AddEmployee from './addEmployee';
import About from './about';
import Action from './actions';
import '../../styles/styles.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.removeAllEmployees = this.removeAllEmployees.bind(this);
        this.resetAllEmployees = this.resetAllEmployees.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
        this.state = {
            copyright: 'All Rights Reserved &copy; 2018-2019 Nissan Digital India LLC',
            dept: ['Sales', 'Marketing', 'Development'],
            employees: []
        }
        this.initial = Object.assign({}, this.state);
    }

    componentDidMount() {
        try {
            const emp_json = localStorage.getItem('employees');
            const json = JSON.parse(emp_json);
            if (json) {
                this.setState(() => ({ employees: json }));
            }
        }
        catch (e) { }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.employees.length !== this.state.employees.length) {
            const emp_json = JSON.stringify(this.state.employees);
            localStorage.setItem('employees', emp_json);
        }
    }

    removeEmployee(index) {
        this.setState((prevState) => ({
            employees: prevState.employees.filter((_, i) => i !== index)
        }))
    }

    removeAllEmployees() {
        this.setState((prevState) => ({
            edata: prevState.employees,
            employees: []
        }))
    }

    resetAllEmployees() {
        this.setState(() => ({
            employees: [
                {
                    id: 1,
                    name: 'Ritesh',
                    email: 'rm@abc.com'
                },
                {
                    id: 2,
                    name: 'Divya',
                    email: 'd@abc.com'
                },
                {
                    id: 3,
                    name: 'Samaksh',
                    email: 'sm@abc.com'
                }
            ]
        }))
    }

    addEmployee(employee) {
        const employees = this.state.employees;
        if (!employee.id || !employee.name || !employee.email)
            return "Enter valid value to add item";
        else if (employees.some(e => Number(e.id) === Number(employee.id)))
            return "Enter valid Employee Id as the id is already present";
        else if (employees.some(e => e.name.toLowerCase() === employee.name.toLowerCase()))
            return "Enter valid Employee Name as the name is already present";
        else if (employees.some(e => e.email.toLowerCase() === employee.email.toLowerCase()))
            return "Enter valid Email id as the email is already present";
        this.setState((prevState) => ({
            employees: prevState.employees.concat(employee)
        }));
    }

    render() {
        return (
            <div>
                <Header myname="Ritesh" />
                <p>Welcome to Dashboard</p>
                <About />
                <Action hasEmployees={this.state.employees.length > 0} />
                <Employees empdata={this.state.employees} removeAllEmployees={this.removeAllEmployees} resetAllEmployees={this.resetAllEmployees} removeEmployee={this.removeEmployee} />
                <AddEmployee addEmployee={this.addEmployee} />
                <Footer copyright={this.state.copyright} />
            </div>
        )
    }
}

Dashboard.propTypes = {
    myname: PropTypes.string.isRequired,
    copyright: PropTypes.string
}
Dashboard.defaultProps = {
    myname: 'Ritesh',
    copyright: 'All Rights Reserved &copy; 2018-2019 Nissan Digital India LLC',
    employees: [
        {
            id: 1,
            name: 'Ritesh',
            email: 'rm@abc.com'
        },
        {
            id: 2,
            name: 'Divya',
            email: 'd@abc.com'
        },
        {
            id: 3,
            name: 'Samaksh',
            email: 'sm@abc.com'
        }
    ]
}

//access objects start with binding
const empObj = {
    emp: {
        id: 1,
        name: 'Ritesh'
    },
    getId() {
        return this.emp.id;
    },
    getName() {
        return this.emp.name;
    }
}

console.log(empObj.getId() + ":" + empObj.getName());

const gn = empObj.getName.bind(empObj);
console.log(gn());
//bind end

export default Dashboard;