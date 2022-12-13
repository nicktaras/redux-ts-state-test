
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

function counter(state = 0, action:any) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('up')
      return state + 1
    case 'DECREMENT':
      console.log('down')
      return state - 1
    default:
      return state
  }
}

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

const store = createStore(
  counter,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

document.getElementById('increment')
  .addEventListener('click', function () {
    console.log('INCREMENT');
    store.dispatch({ type: 'INCREMENT' })
  })

document.getElementById('decrement')
  .addEventListener('click', function () {
    console.log('DECREMENT');
    store.dispatch({ type: 'DECREMENT' })
  });