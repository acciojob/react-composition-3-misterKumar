import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div>
      <Tooltip text="This is tooltip "isBold="bold">
        <h1 className="tooltip" >Hover over me </h1>
      </Tooltip>

      <Tooltip text="This is another tooltip ">
        <p>Hover over me to see another tooltip </p>
      </Tooltip>
    </div>
  );
}

export default App;

