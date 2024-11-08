import * as actionTypes from '../actions/types/auth_type';

const initialState = {
  message: '',
  data: null,
  error: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.message,
        error: false,
        data: action.response,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        message: action.message,
        error: true,
      };
    default:
      return state;
  }
}
