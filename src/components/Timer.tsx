import { useContext } from "react";
import "./Timer.css";
import { TimerContext } from "../context/TimerContext";

export function Timer() {
  const { time, setTimeHandler, setTickingHandler } = useContext(TimerContext);

  const timer = setTimeout(() => {
    setTimeHandler(time - 1);

    if (time === 0) {
      setTimeHandler(0);
      setTickingHandler(false);
      clearTimeout(timer);
    }
  }, 1000);

  function clickHandler() {
    setTimeHandler(0);
    setTickingHandler(false);
    clearTimeout(timer);
  }

  return (
    <div className="timer">
      <div className="timer__text">{time}</div>
      <button className="timer__button" onClick={clickHandler}>
        다시하기
      </button>
    </div>
  );
}
