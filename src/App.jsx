import React from "react";
import LinkPreviewer from "./LinkPreviewer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        Checkout my{" "}
        <LinkPreviewer url="https://www.instagram.com/yourprofile">
          <span className="link">Instagram</span>
        </LinkPreviewer>{" "}
        profile
      </div>
      <div>
        And my{" "}
        <LinkPreviewer url="https://github.com/yourusername">
          <span className="link">Github</span>
        </LinkPreviewer>
      </div>
      <div>
        And my{" "}
        <LinkPreviewer url="https://yourwebsite.com">
          <span className="link">Website</span>
        </LinkPreviewer>{" "}
        website
      </div>
    </div>
  );
}

export default App;
