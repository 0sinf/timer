import { useContext } from "react";
import "./Timer.css";
import { TimerContext } from "../context/TimerContext";
import { TimeProps } from "../@types/Time";

export function Timer({ setActive }: TimeProps) {
  const { time, setTimeHandler } = useContext(TimerContext);

  const timer = setTimeout(() => {
    setTimeHandler(time - 1);

    if (time == 0) {
      setTimeHandler(0);
      setActive(false);
      clearTimeout(timer);
    }
  }, 1000);

  return <div className="timer_div">{time}</div>;
}
