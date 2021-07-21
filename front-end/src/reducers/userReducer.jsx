import { LOGIN_FAILED, LOGIN_SUCCESS, LOG_OUT, USER_WITH_TOKEN_FAILED, USER_WITH_TOKEN_SUCCESS } from "../types/types";

const initialState = {
  auth: false,
  user: null,
};

const reducer =  (state = initialState, action) =>  {

  switch (action.type) {

    case LOGIN_SUCCESS:
      sessionStorage.setItem("token",action.payload.token)
      return {
        ...state,
        auth: true,
        user: action.payload.user
      }

    case LOGIN_FAILED :
    case USER_WITH_TOKEN_FAILED:
    case LOG_OUT:
      sessionStorage.clear()
      return {
        ...state,
        auth:false,
        user:null
      }

      case USER_WITH_TOKEN_SUCCESS:
        return {
          ...state,
          auth: true,
          user: action.payload
        }

    default:
      return state;
  }

};

export default reducer;
