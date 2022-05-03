import { useState } from "react";
import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { Timer } from "./components/Timer";
import { TimerContextProvider } from "./context/TimerContext";

function App() {
  const [active, setActive] = useState(false);

  return (
    <TimerContextProvider>
      <div className="App">
        <div className="App_filter">
          {active ? (
            <Timer setActive={setActive} />
          ) : (
            <TimeForm setActive={setActive} />
          )}
        </div>
      </div>
    </TimerContextProvider>
  );
}

export default App;
