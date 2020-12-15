/* eslint-disable no-unused-vars */
import * as UsersEffect from './UsersEffect';
import * as ActionUtility from '../../utilities/ActionUtility';
import * as ToastsAction from '../toasts/ToastsAction';
import ToastStatusMap from '../../constants/ToastStatusMap';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export const REQUEST_USERS = 'UserAction.REQUEST_USERS';
export const REQUEST_USERS_FINISHED = 'UserAction.REQUEST_USERS_FINISHED';

export function getUsers() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_USERS, UsersEffect.requestUsers);
  };
}

export const REQUEST_USERS_CREATE = 'UserAction.REQUEST_USERS_CREATE';
export const REQUEST_USERS_CREATE_FINISHED = 'UserAction.REQUEST_USERS_CREATE_FINISHED';

export function createUser(user, callback = (id) => ({ id })) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_USERS_CREATE, UsersEffect.requestCreateUser, user);
    if (!(response instanceof HttpErrorResponseModel)) {
      callback(response.id);
      dispatch(ToastsAction.add('Usuario agregada', ToastStatusMap.Success));
    } else {
      callback(false);
    }
  };
}

export const REQUEST_USERS_UPDATE = 'UserAction.REQUEST_USERS_UPDATE';
export const REQUEST_USERS_UPDATE_FINISHED = 'UserAction.REQUEST_USERS_UPDATE_FINISHED';

export function updateUser(user) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_USERS_UPDATE, UsersEffect.requestUpdateUser, user);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Usuario actualizada', ToastStatusMap.Success));
    } else {
      dispatch(getUsers());
    }
  };
}

export const REQUEST_USERS_DELETE = 'UserAction.REQUEST_USERS_DELETE';
export const REQUEST_USERS_DELETE_FINISHED = 'UserAction.REQUEST_USERS_DELETE_FINISHED';

export function deleteBrand(id) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_USERS_DELETE, UsersEffect.requestDeleteUser, id);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Categoría eliminada', ToastStatusMap.Success));
    } else {
      dispatch(getUsers());
    }
  };
}

export const CLEAN_USERS = 'ToastsAction.CLEAN_USERS';

export const cleanUsers = () => {
  return ActionUtility.createAction(CLEAN_USERS);
};

