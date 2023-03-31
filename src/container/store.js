import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// create new store

const store = configureStore({
    reducer: { rootReducer },
    applyMiddleware: { thunk }
});

export default store;