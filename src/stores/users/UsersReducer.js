import * as UsersAction from './UsersAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const brandReducer = baseReducer(initialState, {
  [UsersAction.REQUEST_USERS_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
  [UsersAction.REQUEST_USERS_CREATE_FINISHED](state, action) {
    const brand = action.payload;
    return {
      ...state,
      items: [brand, ...state.items],
    };
  },
  [UsersAction.REQUEST_USERS_UPDATE_FINISHED](state, action) {
    const product = action.payload;
    return {
      ...state,
      items: [product, ...state.items.filter((item) => item.id !== product.id)],
    };
  },
  [UsersAction.REQUEST_USERS_DELETE_FINISHED](state, action) {
    const { id } = action.payload;
    return {
      ...state,
      items: [...state.items.filter((item) => item.id !== id)],
    };
  },
  // eslint-disable-next-line no-unused-vars
  [UsersAction.CLEAN_USERS](state, action) {
    return { ...initialState };
  },
});

export default brandReducer;
