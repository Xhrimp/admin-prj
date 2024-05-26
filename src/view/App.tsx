import './App.css';
import logo from '../logo.svg'
import SideBar from './common/sidebar';

function App() {
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };
 
  return (
    <div className="App" style={{background: '#fff'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
<SideBar/>
    </div>
      </header>
    </div>
  );
}

export default App;
