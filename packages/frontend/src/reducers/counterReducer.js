import ACTION_TYPES from '../actions/types';

const initialState = {
  value: 0,
  step: 1,
};
// action ={type: ''}
// reducer(state / store, action)=> state / store

// action - object of js, that has type: action={type: 'typeOfAction', ...}
const counterReducer = (state = initialState, action) => {
  const { type } = action;
  const { value, step } = state;
  switch (type) {
    case ACTION_TYPES.COUNTER_DECREMENT: {
      return { ...state, value: value - step };
    }
    case ACTION_TYPES.COUNTER_INCREMENT: {
      return { ...state, value: value + step };
    }
    case ACTION_TYPES.COUNTER_SET_STEP: {
      return { ...state, step: action.value };
    }

    default: {
      return state;
    }
  }
};

export default counterReducer;
