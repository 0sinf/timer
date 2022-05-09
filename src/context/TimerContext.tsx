import { createContext, useState } from "react";

export const TimerContext = createContext({
  ticking: false,
  setTickingHandler: (ticking: boolean) => {},
  time: 0,
  setTimeHandler: (time: number) => {},
});

export const TimerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [time, setTime] = useState(0);
  const setTimeHandler = (time: number) => setTime(time);

  const [ticking, setTicking] = useState(false);
  const setTickingHandler = (ticking: boolean) => setTicking(ticking);
  return (
    <TimerContext.Provider
      value={{ time, setTimeHandler, ticking, setTickingHandler }}
    >
      {children}
    </TimerContext.Provider>
  );
};
