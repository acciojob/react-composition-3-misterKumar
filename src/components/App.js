
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Hello </h1>
        <Tooltip text='This is tooltip'>
        <button >Hover over me</button>
        </Tooltip>
        <Tooltip text='This is another tooltip'>
          <button>Another Tooltip</button>
          </Tooltip>
    </div>
  )
}

export default App