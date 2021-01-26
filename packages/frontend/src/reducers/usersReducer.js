import ACTION_TYPES from '../actions/types';
import ACTION_TYPE from '../actions/types';

const initialValues = {
  users: [],
  isFetching: false,
  error: null,
};

const usersReducer = (state = initialValues, action) => {
  const { type } = action;
  const { users, isFetching, error } = state;

  switch (type) {
    case ACTION_TYPES.CREATE_USER: {
      const { user } = action;
      const newUser = { ...user, id: Date.now() };

      const newUsers = [...users, newUser];
      return { ...state, users: newUsers };
    }

    case ACTION_TYPES.UPDATE_USER: {
      const { value, id } = action;
      const newUsers = [...users];
      users[id] = { ...newUsers[id], ...value };

      return { ...state, users: newUsers };
    }

    case ACTION_TYPES.DELETE_USER: {
      const { id } = action;
      const newUsers = [...users];
      newUsers.splice(id, 1);

      return { ...state, users: newUsers };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
