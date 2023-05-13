import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splitTimes,
  } = useTimer(0);

  return (
    <div className="container">
      <h1>MY GOOD OLD TIMER</h1>
      <div className="split_wrapper">
        <div className="timer__wrapper">
          <div className="timer__display">
            <p>{formatTime(time)}</p>
          </div>
          <div className="button__wrapper">
            <button className="button" onClick={stopTimer}>
              Stop
            </button>
            <button className="button" ref={active} onClick={startTimer}>
              Start
            </button>
            <button className="button" onClick={resetTimer}>
              Reset
            </button>
            <button className="button" onClick={splitTimer}>
              Split
            </button>
          </div>
        </div>
        {splitTimes.map((splitTime) => (
          <div className="timer__wrapper" key={splitTime.id}>
            <div className="timer__display">
              <p>{formatTime(splitTime.times)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
