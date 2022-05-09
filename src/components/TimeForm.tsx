import "./TimeForm.css";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export function TimeForm() {
  const { time, setTimeHandler, setTickingHandler } = useContext(TimerContext);

  function clickHandler() {
    if (!isNaN(time) && time > 1) {
      setTickingHandler(true);
    }
  }

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        defaultValue={time}
        onChange={(event) => setTimeHandler(+event.target.value)}
      />
      <button
        className="button form__button"
        type="button"
        onClick={clickHandler}
      >
        시작
      </button>
    </form>
  );
}
