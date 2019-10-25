import Type from '../Type';

export const onSave = value => ({
  type: Type.TOTALBUDG,
  payload: value,
});

export const saveExpense = object => ({
  type: Type.INCREMENT,
  payload: object,
});

export const onRemove = id => ({
  type: Type.DECREMENT,
  payload: id,
});
