import React from 'react';
import { connect } from 'react-redux';

const initialValues = { value: 0, step: 1 };

// action ={type: ''}
// reducer(state / store, action)=> state / store
const reduser = (state, action) => {
  const { type } = action;
  const { value, step } = state;
  switch (type) {
    case 'DECREMENT': {
      return { ...state, value: value - step };
    }
    case 'INCREMENT': {
      return { ...state, value: value + step };
    }
    case 'SET_STEP': {
      return { ...state, step: action.value };
    }

    default: {
      return state;
    }
  }
};

const Counter = (props) => {
  //   const [value, setValue] = useState(0);
  //   const [step, setStep] = useState(1);

  // const [{ value, step }, dispatch] = useReducer(reduser, initialValues);
  const { value, step, increment, decrement, setStep } = props;

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={() => increment}>+</button>
        <button onClick={() => decrement}>-</button>
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
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT' });
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT' });
    },
    setStep: (value) => {
      dispatch({ type: 'SET_STEP', value });
    },
  };
}

connect(mapStateToProps, mapDispatchToProps)();

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
