import createStore from 'redux';

const initialStore = {};

// action - object of js, that has type: action={type: 'typeOfAction'}
const reduser = (store = initialStore, action) => {
  const { type } = action;
  switch (type) {
    default:
      return store;
  }
};

const store = createStore();

export default store;
