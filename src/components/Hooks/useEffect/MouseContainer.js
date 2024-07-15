import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
  const [display, setDisplay] = useState(true); // Declare state for display

  return (
    <div>
      MouseContainer<br></br>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
