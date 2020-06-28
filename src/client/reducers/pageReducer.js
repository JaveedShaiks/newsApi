import { SAVE_PAGE } from '../actions';
export default (state = 1, action) => {
  switch (action.type) {
    case SAVE_PAGE:
      return action.payload;
    default:
      return state;
  }
};
