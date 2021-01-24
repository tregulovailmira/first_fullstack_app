import { createStore } from 'redux';

const initialStore = {};

// action - object of js, that has type: action={type: 'typeOfAction', ...}
const reduser = (state = initialStore, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
