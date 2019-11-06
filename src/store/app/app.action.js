import {
  makeActionCreator,
  // makeAsyncActionTypes,
  // makeAsyncActionCreator,
} from 'utils/actionHelper';

export const AppActionTypes = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR',
  SET_LOGIN: 'SET_LOGIN',
  SET_LOGOUT: 'SET_LOGOUT',
};

export const AppActionCreators = {
  toggleSidebar: makeActionCreator(AppActionTypes.TOGGLE_SIDEBAR),
  closeSidebar: makeActionCreator(AppActionTypes.CLOSE_SIDEBAR),
  setLogin: makeActionCreator(AppActionTypes.SET_LOGIN),
  setLogout: makeActionCreator(AppActionTypes.SET_LOGOUT),
};
