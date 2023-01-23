import './App.css';
import logo from './Logo.png'; // Add logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          LimeGreen Coming Soon
        </p>
        <img src ={logo} alt ='logo' />
        <h1>
          Spring 2023
        </h1>
      </header>
      <footer className="Footer">
        Copyright 2023
      </footer>
    </div>
  );
}

export default App;
