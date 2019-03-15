import React from 'react';

const Body = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h3>{match.path}</h3>
        </div>
    );
}

export default Body;