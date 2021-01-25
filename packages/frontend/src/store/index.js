import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// action ={type: ''}
// reducer(state / store, action)=> state / store

// action - object of js, that has type: action={type: 'typeOfAction', ...}

const store = createStore(rootReducer);

export default store;

// redux: createStore
//        combineReducers
// react-redux: connect
//              Provader
