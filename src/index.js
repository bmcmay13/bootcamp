import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox!</h1>
      <h2>
        When I start editing, I should see some magic happen! I should be able
        to change this file, preview it, and then commit it into Github.
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
