import "./App.css";

import AllBooks from "./components/AllBooks";
import MyBookCollection from "./components/MyCollectionBooks";

function App({}) {
  return (
    <div className="App">
      <h3>All Books</h3>
      <div className="App-header">
        <AllBooks />
      </div>
      <h3>My Collection</h3>
      <div className="App-header">
        <MyBookCollection />
      </div>
    </div>
  );
}

export default App;
