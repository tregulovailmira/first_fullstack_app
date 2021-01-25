import React from 'react';
import { connect } from 'react-redux';
import {
  counterDecrement,
  counterIncrement,
  counterSetStep,
} from '../../actions/counterActionCreators';
import ACTION_TYPES from '../../actions/types';

const Counter = (props) => {
  const { value, step, increment, decrement, setStep } = props;

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input
        type="number"
        value={step}
        onChange={({ target: { value } }) => setStep(+value)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return state.counter;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(counterIncrement());
    },
    decrement: () => {
      dispatch(counterDecrement());
    },
    setStep: (value) => {
      dispatch(counterSetStep(value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
