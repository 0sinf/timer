import { useContext } from "react";
import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { Timer } from "./components/Timer";
import { TimerContextProvider, TimerContext } from "./context/TimerContext";

function App() {
  const { ticking } = useContext(TimerContext);

  return (
    <TimerContextProvider>
      <div className="App">
        <div className="App_filter">{ticking ? <Timer /> : <TimeForm />}</div>
      </div>
    </TimerContextProvider>
  );
}

export default App;
