import ACTION_TYPES from './types';

export const createTask = (value) => ({
  type: ACTION_TYPES.CREATE_TASK,
  value,
});

export const updateTask = (value, id) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  value,
  id,
});

export const removeTask = (id) => ({
  type: ACTION_TYPES.REMOVE_TASK,
  id,
});
