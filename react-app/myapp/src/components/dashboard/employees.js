import React from 'react';
import Employee from './employee';

const Employees = (props) => (
    <div>
        <h4>Employees</h4>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.empdata.map((emp, index) => <Employee key={emp.id} edata={emp} index={index} removeEmployee={props.removeEmployee} />)
                }
            </tbody>
        </table>
        <button onClick={props.removeAllEmployees} hidden={!props.empdata.length > 0}>Remove All</button>
        <button onClick={props.resetAllEmployees}>Reset</button>
    </div>
)

export default Employees;

// class Employees extends Component{
//     // constructor(props){
//     //     super(props);
//     //     this.removeAllEmployees = this.removeAllEmployees.bind(this);
//     //     this.showAllEmployees = this.showAllEmployees.bind(this);
//     //     this.resetAllEmployees = this.resetAllEmployees.bind(this);
//     //     this.state= {
//     //         edata : this.props.empdata
//     //     }
//     // }

//     // removeAllEmployees(){
//     //     console.log("All employees: ",this.props.empdata);
//     //     this.setState((prevState) => ({
//     //         edata : []
//     //     }));
//     // }

//     // resetAllEmployees(){
//     //     console.log("All employees: ",this.props.empdata);
//     //     this.setState((prevState) => ({
//     //         edata : this.props.empdata
//     //     }));
//     // }

//     // showAllEmployees(){
//     //     console.log("All employees: ",this.state.edata);
//     // }

//     render(){
//         return (
//             <div>
//                 <h4>Employees</h4>
//                 <ul>
//                     {
//                         this.props.empdata.map((emp)=> <Employee key={emp.id} edata={emp}/>)
//                     }
//                 </ul>
//                 <button onClick={this.props.removeAllEmployees}  hidden={!this.props.empdata.length >0}>Remove All</button>
//                 <button onClick={this.props.resetAllEmployees}>Reset</button>
//             </div>
//         )
//     }
// }
