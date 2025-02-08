/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
import './AboutMe.css'
function AboutMe() {
    // We can create any logic we like inside the function and before the return.
    const city = "Greenfield";
    const state = "MA";
    
    let styles = {
        ul: {
            textAlign: "right",
            color: "green"
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(
        <div>
            <p style = {styles.p}>I grew up in {city}, {state}</p>
            <p>Most recently, I have visited:</p>
            {/* JS doesn't allow dashes, so text-align becomes textAlign */}
            {/* <ul style = {{textAlign: "left", color: "blue"}}> */}
            <ul style = {styles.ul}>
                <li>Connecticut</li>
                <li>New York</li>
                <li>Vermont</li>
            </ul>
        </div>
    )
}

export default AboutMe;