import ACTION_TYPES from './types';

export const createUser = (user) => ({
  type: ACTION_TYPES.CREATE_USER,
  user,
});

export const updateUser = (user, id) => ({
  type: ACTION_TYPES.UPDATE_USER,
  user,
  id,
});

export const deleteUser = (id) => ({
  type: ACTION_TYPES.DELETE_USER,
  id,
});
