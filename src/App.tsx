import { useState } from "react";
import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { Timer } from "./components/Timer";
import { TimerContextProvider, TimerContext } from "./context/TimerContext";

function App() {
  const [tick, setTick] = useState(false);

  return (
    <TimerContextProvider>
      <div className="App">
        <figure className="background">
          <img src="/assets/background.jpeg" alt="background image" />
        </figure>
        {tick ? <Timer setTick={setTick} /> : <TimeForm setTick={setTick} />}
      </div>
    </TimerContextProvider>
  );
}

export default App;
