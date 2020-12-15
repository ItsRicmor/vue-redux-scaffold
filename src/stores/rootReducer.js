import { combineReducers } from 'redux';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';
import usersReducer from './users/UsersReducer';

export default function rootReducer() {
  const reducerMap = {
    error: errorReducer,
    requesting: requestingReducer,
    toasts: toastsReducer,
    users: usersReducer,
  };

  return combineReducers(reducerMap);
}
