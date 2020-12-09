import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = (value) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: value,
  };
};
