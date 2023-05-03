// Using import keyword to connect to and bring in CSS from CSS file
import './App.css';
// Importing the header component, "from" keyword is used to bring it/ref the file path
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe'
import Footer from './components/footer/Footer'
// The Div here is the one parent container that is returned with react.
import Employees from './components/employeeInformation/Employees';
// This is a functional component: it is declared with the function keyword, the name of the function is the component name (capitalized / PascalCase)
function App() {
  // Functional Components have a single return
  return (
    // Reminder: JSX will only allow ONE JSX Element to be returned (that element can contained child/many elements)
    <div className="App">
      {/* To use an imported component: it gets written/called as a self-closing tag. */}
      <Header />
      <AboutMe />
      <Employees />
      {/* <EmployeeInfo name="Gloria" />
      <EmployeeInfo name="Catalonia" />
      <EmployeeInfo name ="Salem" /> */}
      <Footer />
    </div>
  );
}

// How the functional component gets exported: export default component-name/function-name (needs to match)
export default App;
