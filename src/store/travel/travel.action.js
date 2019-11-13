import {
  makeActionCreator,
  // makeAsyncActionTypes,
  // makeAsyncActionCreator,
} from 'utils/actionHelper';

export const TravelActionTypes = {
  ADD_NEW_TRAVEL: 'ADD_NEW_TRAVEL',
  APPLY_TRAVEL: 'APPLY_TRAVEL',
  CANCEL_TRAVEL: 'CANCEL_TRAVEL',
};

export const TravelActionCreators = {
  addNewTravel: makeActionCreator(TravelActionTypes.ADD_NEW_TRAVEL),
  applyTravel: makeActionCreator(TravelActionTypes.APPLY_TRAVEL),
  cancelTravel: makeActionCreator(TravelActionTypes.CANCEL_TRAVEL),
};
