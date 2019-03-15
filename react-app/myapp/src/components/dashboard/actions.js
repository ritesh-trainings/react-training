import React from 'react';

const Action = ({hasEmployees}) =>
    <button onClick={action} disabled={!hasEmployees}>Action</button>;

const action = () =>
    console.log("Hello Action");

export default Action;