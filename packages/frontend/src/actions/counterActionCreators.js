import ACTION_TYPES from './types';

export const counterIncrement = () => ({
  type: ACTION_TYPES.COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: ACTION_TYPES.COUNTER_DECREMENT,
});

export const counterSetStep = (value) => ({
  type: ACTION_TYPES.COUNTER_SET_STEP,
  value,
});
