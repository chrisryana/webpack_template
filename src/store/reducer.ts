import * as ACT from './actions';
import * as INT from '../models';


const InitialState = {
  stepper: [],
};

interface Action {
  type: string
  payload?: any,
}

function reducer(state = InitialState, action: Action) {
  switch (action.type) {
    case ACT.REFRESH_STEPPER:
      return {
        ...state,
        stepper: [...state.stepper, ...action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
