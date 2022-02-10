import { useState } from "react";
import Register from "./components/Register";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [students, setStudents] = useState([{ name: "Vilson", grade: 10 }]);

  return (
    <div className="App">
      <header className="App-header">
        <Register students={students} setStudents={setStudents} />
        <Display students={students} />
      </header>
    </div>
  );
}

export default App;
