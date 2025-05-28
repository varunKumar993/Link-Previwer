import React from "react";
import LinkPreviewer from "./LinkPreviewer";

function App() {
  return (
    <div className="container">
      <div>
        {" "}
        checkout my
        <LinkPreviewer url="#">
          <span className="link">Instagram</span>
        </LinkPreviewer>{" "}
        Profile{" "}
      </div>
      <div>
        And my
        <LinkPreviewer url="#">
          <span className="link">Github</span>
        </LinkPreviewer>{" "}
      </div>
      <div>
        And my
        <LinkPreviewer url="#">
          <span className="link">Website</span>
        </LinkPreviewer>{" "}
        Website
      </div>
      <div>
        And my
        <LinkPreviewer url="#">
          <span className="link">Website</span>
        </LinkPreviewer>{" "}
        Website
      </div>
    </div>
  );
}

export default App;
