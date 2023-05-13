export const formatTime = (time) => {
  const getSeconds = (time % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const getMinutes =
    time > 59
      ? Math.floor(time / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : "00";
  const getHours =
    time > 3599
      ? Math.floor(time / 3600).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : "00";

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
