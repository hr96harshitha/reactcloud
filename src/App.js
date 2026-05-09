import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{process.env.REACT_APP_KEY_USE_MODE}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <h1>{process.env.REACT_APP_KEY_APPNAME}</h1>
        <h2> V ~ {process.env.REACT_APP_KEY_VERSION}</h2>

        <h3>{process.env.REACT_APP_KEY_API_URL}</h3>
        <h4>{process.env.REACT_APP_KEY_SECRET}</h4>
        

        
      </header>
    </div>
  );
}

export default App;
