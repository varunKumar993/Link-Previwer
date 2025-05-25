import React from "react";
import LinkPreviewer from "./LinkPreviewer";

function App() {
  return (
    <div className="container">
      <div> checkout my </div>
      <LinkPreviewer url="#">
        <span className="link">Instagram</span>
      </LinkPreviewer>
    </div>
  );
}

export default App;
