import "./App.css";
import { TimeForm } from "./components/TimeForm";
import { TimerContextProvider } from "./context/TimerContext";

function App() {
  return (
    <TimerContextProvider>
      <div className="App">
        <div className="App_filter">
          <TimeForm />
        </div>
      </div>
    </TimerContextProvider>
  );
}

export default App;
