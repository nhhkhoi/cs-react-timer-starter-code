import { useState, useRef, useEffect } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const active = useRef(null);
  const [splitTimes, setSplitTimes] = useState([]);

  const refInterval = () => {
    if (isStart) {
      setTime(time + 1);
    }
  };
  useEffect(() => {
    const counter = setInterval(refInterval, 1000);
    return () => {
      clearInterval(counter);
    };
  });

  const startTimer = () => {
    setIsStart(true);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    setIsStart(false);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    setIsStart(false);
    setSplitTimes([]);
    active.current.disabled = false;
  };
  const splitTimer = () => {
    if (isStart) {
      let newTime = {
        id: Date.now(),
        times: time,
      };
      setSplitTimes([...splitTimes, newTime]);
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimes,
    splitTimer,
  };
};
export default useTimer;
