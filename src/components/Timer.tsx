import { useContext } from "react";
import "./Timer.css";
import { TimerContext } from "../context/TimerContext";
import { TimerProps } from "../@types/time";

export function Timer({ setTick }: TimerProps) {
  const { time, setTimeHandler } = useContext(TimerContext);

  const timer = setTimeout(() => {
    setTimeHandler(time - 1);

    if (time === 1) {
      setTimeHandler(0);
      setTick(false);
      clearTimeout(timer);
    }
  }, 1000);

  function clickHandler() {
    setTick(false);
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
