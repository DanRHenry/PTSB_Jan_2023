
// this is the child
import React from "react";
function DisplayTotals (props) {
    return (
        <React.Fragment>
            <h1>{props.name}</h1>
            <ul style={{listStyleType: "none", textAlign: "left"}}> 
            {/* Why do we use double curly braces in React?
Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value. */}
                <li>Name: {props.name}, Count: {props.count}</li>
            </ul>
        </React.Fragment>
    )
}



export default DisplayTotals;