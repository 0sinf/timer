import "./TimeForm.css";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";
import { TimeProps } from "../@types/Time";

export function TimeForm({ setActive }: TimeProps) {
  const { time, setTimeHandler } = useContext(TimerContext);

  function clickHandler() {
    setActive(true);
  }

  return (
    <div className="form_div">
      <input
        className="form_input"
        type="text"
        defaultValue={time}
        onChange={(event) => setTimeHandler(+event.target.value)}
      />
      <button className="form_button" type="button" onClick={clickHandler}>
        시작
      </button>
    </div>
  );
}
