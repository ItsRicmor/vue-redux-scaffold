import { createSelector } from 'reselect';

class UsersSelector {

  static selectUsers = (users) => {
    return users;
  };

  static selectUsersToTable = (users) => {
    return UsersSelector._createTableRows(users);
  };

  static _createTableRows = (models) => {
    return models.map((model) => ({
      id: model.id,
      name: model.name,
      username: model.username,
      email: model.email,
      phone: model.phone,
      website: model.website
    }));
  };
}

export default UsersSelector;

export const selectUsersToTable = createSelector((state) => state.users.items, UsersSelector.selectUsersToTable);
export const selectUsers = createSelector((state) => state.users.items, UsersSelector.selectUsers);
