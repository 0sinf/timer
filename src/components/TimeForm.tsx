import "./TimeForm.css";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export function TimeForm() {
  const { time, setTimeHandler } = useContext(TimerContext);

  return (
    <div className="form_div">
      <input
        className="form_input"
        type="text"
        defaultValue={time}
        onChange={(event) => setTimeHandler(+event.target.value)}
      />
      <button className="form_button" type="button">
        시작
      </button>
    </div>
  );
}
