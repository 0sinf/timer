import { useState } from "react";
import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { TimerContextProvider } from "./context/TimerContext";

function App() {
  const [active, setActive] = useState(false);

  return (
    <TimerContextProvider>
      <div className="App">
        <div className="App_filter">
          {active ? "" : <TimeForm setActive={setActive} />}
        </div>
      </div>
    </TimerContextProvider>
  );
}

export default App;
