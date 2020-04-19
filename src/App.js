import React from "react";
import { FlexRow, FlexColumn } from "./styled";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>We are on</h1>
      <FlexRow
        flex="1"
        width="null"
        height="null"
        positionX="space-between"
        positionY="null"
      >
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/">Some</a>
      </FlexRow>
    </div>
  );
}

export default App;
