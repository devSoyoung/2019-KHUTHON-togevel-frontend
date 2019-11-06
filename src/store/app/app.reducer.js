import { AppActionTypes } from './app.action';

export const initialState = {
  showSidebar: false,
  isLogin: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };

    case AppActionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
      };

    case AppActionTypes.SET_LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case AppActionTypes.SET_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default appReducer;
