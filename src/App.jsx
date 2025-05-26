import React from "react";
import LinkPreviewer from "./LinkPreviewer";

function App() {
  return (
    <div className="container">
      <div> checkout my </div>
      <LinkPreviewer url="#">
        <span className="link">Instagram</span>
      </LinkPreviewer>{" "}
      Profile
      <div>
        And my
        <LinkPreviewer url="#">
          <span className="link">Github</span>
        </LinkPreviewer>{" "}
      </div>
    </div>
  );
}

export default App;
