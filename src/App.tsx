import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:5000/api/v1/greeting");
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
