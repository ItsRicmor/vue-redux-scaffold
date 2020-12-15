import environment from 'environment';
import UserModel from '../models/users/UserModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestUsers() {
  const endpoint = environment.api.users.replace(':id', '');

  return EffectUtility.getToModel(UserModel, endpoint);
}

export async function requestCreateUser(user) {
  const endpoint = environment.api.users.replace(':id', '');
  return EffectUtility.postToModel(UserModel, endpoint, user);
}

export async function requestUpdateUser(user) {
  const endpoint = environment.api.users.replace(':id', user.id);
  return EffectUtility.putToModel(UserModel, endpoint, user);
}

export async function requestDeleteUser(id) {
  const endpoint = environment.api.users.replace(':id', id);
  return EffectUtility.deleteToModel(UserModel, endpoint);
}
