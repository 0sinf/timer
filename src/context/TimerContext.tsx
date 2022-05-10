import { createContext, useState } from "react";

export const TimerContext = createContext({
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

  return (
    <TimerContext.Provider value={{ time, setTimeHandler }}>
      {children}
    </TimerContext.Provider>
  );
};
