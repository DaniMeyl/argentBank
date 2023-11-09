import {
  UPDATE_USER_NAME,
  USER_LOGIN_FAILLED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../types/User";

const initialState = {
  token: "",
  user: null,
  userLoading: false,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        userLoading: false,
        user: payload.user,
        token: payload.token,
      };
    }
    case USER_LOGIN_FAILLED: {
      return {
        ...state,
        userLoading: false,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      localStorage.removeItem("token");

      return { 
        ...state,
        token: "",
        user: null,
        userLoading: false };
    }

    case UPDATE_USER_NAME:
      const newUserName = { ...state.user, userName: action.payload };

      return {
        ...state,
        user: newUserName,
      };

    default:
      return state;
  }
};

export default userReducer;
