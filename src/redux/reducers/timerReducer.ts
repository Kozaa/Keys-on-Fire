import * as actions from "../actionTypes";

type TimerState = {
  startedAt: number;
  stoppedAt: number;
};

const initialState = {
  startedAt: 0,
  stoppedAt: 0,
};

type ActionType = {
  type:
    | typeof actions.TIMER_RESET
    | typeof actions.TIMER_START
    | typeof actions.TIMER_STOP;
  payload: {
    now: number;
  };
};

const timerReducer = (
  state: TimerState = initialState,
  action: ActionType
): TimerState => {
  switch (action.type) {
    case actions.TIMER_RESET:
      return {
        ...state,
        startedAt: 0,
        stoppedAt: 0,
      };
    case actions.TIMER_START:
      return {
        ...state,
        startedAt: action.payload.now,
        stoppedAt: 0,
      };
    case actions.TIMER_STOP:
      return {
        ...state,
        stoppedAt: action.payload.now,
      };
    default:
      return state;
  }
};

export default timerReducer;
