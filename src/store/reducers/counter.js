import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../store/utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      updateObject(state, { counter: state.counter + 1 });
    // const newState = Object.assign({}, state);
    // newState.counter = state.counter + 1;
    // return newState;
    case actionTypes.DECREMENT:
      updateObject(state, { counter: state.counter - 1 });
    // return {
    //   ...state,
    //   counter: state.counter - 1,
    // };
    case actionTypes.ADD:
      updateObject(state, { counter: state.counter + action.val });
    // return {
    //   ...state,
    //   counter: state.counter + action.val,
    // };
    case actionTypes.SUBTRACT:
      updateObject(state, { counter: state.counter - action.val });
    // return {
    //   ...state,
    //   counter: state.counter - action.val,
    // };
  }
  return state;
};

export default reducer;
