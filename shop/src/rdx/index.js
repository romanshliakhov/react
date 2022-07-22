import { createStore, combineReducers } from 'redux';
import { todoListReducer } from './todoList/reducer';

export const store = createStore(combineReducers({
    todo: todoListReducer,
}));