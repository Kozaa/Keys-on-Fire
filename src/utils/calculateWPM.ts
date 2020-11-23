type TimerState = {
  startedAt: number;
  stoppedAt: number;
};

const calculateWPM = (timer: TimerState, length: number): string | null => {
  console.log(length, timer.startedAt, timer.stoppedAt);
  if (!length || !timer.stoppedAt || !timer.startedAt) return null;

  const miliseconds = timer.stoppedAt - timer.startedAt;

  const seconds = miliseconds / 1000;

  const WPM = (length / seconds) * 60;
  console.log(WPM.toFixed(2));
  return WPM.toFixed(2);
};

export default calculateWPM;
