import { createStore } from 'redux';
import todoReducer from '../reducers/item.reducer';

const store = createStore(todoReducer);

export default store;
