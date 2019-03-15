import React from 'react';

const Employee = (props) => (
    <tr>
        <td>
            {props.edata.id}
        </td>
        <td>
            {props.edata.name}
        </td>
        <td>
            {props.edata.email}
        </td>
        <td>
            <button className='table-button' onClick={() => { props.removeEmployee(props.index) }}>
                X
            </button>
        </td>
    </tr>
)
export default Employee;