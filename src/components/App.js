
import React from 'react';
import ToolTip from './ToolTip';

const App = () => {
  return (
    <div>
      <ToolTip text="This is a tooltip">
        <h1 className='tooltip'>Hover over me</h1>
      </ToolTip>
      <br />
      <ToolTip text="This is another tooltip">
        <span className="tooltip1">Hover over me to see another tooltip</span>
      </ToolTip>
    </div>
  );
};

export default App;

