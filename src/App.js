import Logo from "./images/3DLogo.png";
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Yes, my logo. Rotate, rotate FOREVER.
        </p>
      </header>
    </div>
  );
}

export default App;
