
import React from 'react';
import Tooltip from './ToolTip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h1 className='tooltip'>Hover over me</h1>
      </Tooltip>
      <br />
      <Tooltip text="This is another tooltip">
        <span className="tooltip1">Hover over me to see another tooltip</span>
      </Tooltip>
    </div>
  );
};

export default App;

