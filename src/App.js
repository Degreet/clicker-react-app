import React, { useState } from "react";
import Clicks from "./Clicker/Clicks";

function App() {
  const [clicks, setClicks] = useState(0);

  function addClick() {
    setClicks(clicks + 1);
  }

  return (
    <div className="wrapper">
      <Clicks clicks={clicks} addClick={addClick} />
    </div>
  );
}

export default App;
