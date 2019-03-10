//Presentational component can have class or function
import React from 'react';

// const Counter = function(props) {
//     console.log(this);
//     return true;
// }

const Counter = (props) => (
    <div>
        <h1>Counter: {props.count}</h1>
        <button onClick={props.handleIncrement}>+</button>
    </div>
);

export default Counter;