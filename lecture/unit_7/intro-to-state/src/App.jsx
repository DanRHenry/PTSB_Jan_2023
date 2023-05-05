import './App.css';
import Nav from './components/nav/Nav'
import Welcome from './components/welcome/Welcome';
function App() {
  const name = "Georgina"
  return (
    <div className="App">
      <Nav />
      <Welcome name ={name}/>
    </div>
  );
}

export default App;
