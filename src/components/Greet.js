import React from 'react';

// function Greet() {
//     return <h1>Hello Polin</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}.</h1>
            <h1>{props.children} {props.name}</h1>
            {props.children}
        </div >
    )
}

export default Greet;