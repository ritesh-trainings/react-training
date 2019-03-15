import React from 'react';

const About =() => (
            <div>
                <h3>About</h3>
                <button onClick={callme}>Call Me</button>
            </div>
        );

function callme(){
    console.log("About");
};

export default About;