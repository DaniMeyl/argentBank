import {
  
  USER_LOGIN_FAILLED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_UPDATE_FAILLED,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../types/User";

const initialState = {
  token: "",
  user: null,
  userLoading: false,
  userUpdateLoading: false
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
      alert("une erreur s'est produite lors de la connexion")
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
    case USER_UPDATE_REQUEST: {
      return {
        ...state,
        userUpdateLoading: true,
      };
    }
    case USER_UPDATE_SUCCESS:
      const newUserName = { ...state.user, userName: action.payload };

      return {
        ...state,
        user: newUserName,
        userUpdateLoading: false
      };
      case USER_UPDATE_FAILLED: {
        alert("une erreur s'est produite lors de la mise à jour")
        return {
          ...state,
          userUpdateLoading: false,
        };
      }

    default:
      return state;
  }
};

export default userReducer;
