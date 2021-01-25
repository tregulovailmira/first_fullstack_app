import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  const { type } = action;
  const { tasks, isFetching, error } = state;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { value } = action;
      const newTask = { ...value, id: Date.now() };

      const newTasks = [...tasks, newTask];
      return { ...state, tasks: newTasks };
    }

    case ACTION_TYPES.UPDATE_TASK: {
      const { value, id } = action;
      const newTasks = [...tasks];
      newTasks[id] = { ...newTasks[id], isDone: value };
      return { ...state, tasks: newTasks };
    }

    case ACTION_TYPES.REMOVE_TASK: {
      const { id } = action;
      const newTasks = [...tasks];
      newTasks.splice(id, 1);

      return { ...state, tasks: newTasks };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
