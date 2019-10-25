import { combineReducers } from 'redux';
import Type from '../Type';

const Budget = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.TOTALBUDG:
      return payload;
    default:
      return state;
  }
};

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return [payload, ...state];
    case Type.DECREMENT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  Budget,
  expenses,
});

export default mainReducer;
