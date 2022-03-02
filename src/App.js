import "./App.css";
import ChangeValue from "./Components/ChangeValue";
import Display from "./Components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <ChangeValue />
      </header>
    </div>
  );
}

export default App;
