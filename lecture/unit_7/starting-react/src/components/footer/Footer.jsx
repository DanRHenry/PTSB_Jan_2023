/* 
    - Write a function that exports a single h6 element with a copyright.
    - Type in the current year.
    - Export the component.
    - Import the component within App.jsx
    - Mount at the bottom of the JSX being returned in App.jsx.

    Bonus: Make the year dynamic so it is not hard coded and will change after this year.
*/

function Footer() {
    // We can create any logic we like inside the function and before the return.
    let d = new Date();
    let year = d.getFullYear()
    // could also be written: const currentYear = new Date().getFullYear();
    return(
        <header>
            <h6>
                Copyright {year} &copy;
            </h6>
        </header>
    )
}

export default Footer;