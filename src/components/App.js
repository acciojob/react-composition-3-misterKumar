
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h2 className="tooltip">
          <Tooltip text="This is a tooltip">Hover over me</Tooltip>
        </h2>

        <p className="tooltip">
          <Tooltip text="This is another tooltip">
            This is another tooltip
          </Tooltip>
        </p>
    </div>
  )
}

export default App