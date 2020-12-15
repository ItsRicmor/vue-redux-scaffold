/* eslint-disable no-unused-vars */
import ToastStatusMap from '../constants/ToastStatusMap';
import * as ToastsAction from '../stores/toasts/ToastsAction';

export default function errorToastMiddleware() {
  return (store) => (next) => (action) => {
    if (action.error) {
      const errorAction = action;

      next(ToastsAction.add(errorAction.payload.message, ToastStatusMap.Error));
    }

    next(action);
  };
}
