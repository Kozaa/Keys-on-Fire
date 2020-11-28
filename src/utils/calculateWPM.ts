import { numberOfWords } from "./constatnts";

type TimerState = {
  startedAt: number;
  stoppedAt: number;
};

const calculateWPM = (timer: TimerState): string | null => {
  if (!timer.stoppedAt || !timer.startedAt) return null;

  const miliseconds = timer.stoppedAt - timer.startedAt;

  const seconds = miliseconds / 1000;

  const WPM = (numberOfWords / seconds) * 60;

  return WPM.toFixed(2);
};

export default calculateWPM;
