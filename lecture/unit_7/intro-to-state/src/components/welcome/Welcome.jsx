export default function Welcome(props) {
  // console.log(props);
  // console.log(props.name)

  // Build a function that can remove an item
  function removeName() {
    // Test function with console.log()
    // console.log(`Clicked ${props.name}`)
        // Create a variable called updatedNames, this will be targeting the names state array that is being passed and .filter() the name that was assigned to each component and comparing it to the prop.name we are viewing.

    // filter() will generate a new array and store it within our variable
    const updatedNames = props.names.filter(name => name !== props.name);

    // Next, we want to target our setName prop(function) and pass our new array as the updated value for our state variable. AKA: We will reset the names array to the updatedNames filtered array.
    props.setName(updatedNames);
  }

  // we can add our functionality via an onClick event/event listener

  return (
    <div onClick={removeName} className = "welcome"> Welcome, {props.name}</div>
    // <div className="welcome">Welcome, {props.name}!
    // {/* <small>{props.name}</small> */}
    // </div>
  )
}
