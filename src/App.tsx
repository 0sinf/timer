import { useContext, useEffect } from "react";
import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { Timer } from "./components/Timer";
import { TimerContextProvider, TimerContext } from "./context/TimerContext";

function App() {
  const { ticking } = useContext(TimerContext);

  return (
    <TimerContextProvider>
      <div className="App">
        <figure className="background">
          <img src="../public/assets/background.jpeg" alt="background image" />
        </figure>
        {ticking ? <Timer /> : <TimeForm />}
      </div>
    </TimerContextProvider>
  );
}

export default App;
