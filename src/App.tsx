import { useState } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  return (
    <div className="App">
      <div className="App_filter"></div>
    </div>
  );
}

export default App;
