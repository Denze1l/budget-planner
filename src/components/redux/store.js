import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import mainReducer from './BudgetApp/BudgetReducers';

const store = createStore(mainReducer, devToolsEnhancer()); // ЧТО ТАКОЕ КРИЕЙТСТОРЕ?

export default store;
