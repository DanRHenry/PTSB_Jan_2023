import React from "react"; // Import keyword to create the variable, React, to call on the package, "react" functionality. Also, components are always capitalized. Let's you know what your calling is a Component and not just a function. The format is very similar
function EmployeeInfo(props) {
    // console.log(props.name)
    console.log(props.id);
    return (
        <React.Fragment>
            <h1>{props.name}</h1>
            <ul style={{listStyleType: "none", textAlign: "left"}}> 
            {/* Why do we use double curly braces in React?
Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value. */}

{/* To get rid of the key error, check this out: https://react.dev/learn/rendering-lists#filtering-arrays-of-items */}
                <li>From {props.city}, {props.state}</li>
                <li>Position: {props.position}</li>
                <li>Favorite Food: {props.food}</li>
            </ul>
        </React.Fragment>
    )
}

export default EmployeeInfo;