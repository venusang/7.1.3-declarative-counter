import React, { useState } from 'react';


function App() {
  let [counter, changeCounter] = useState(1);
  // This makes changeCounter global and accessible outside of the module
  // for testing and debugging purposes

  window.changeCounter = changeCounter;

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;