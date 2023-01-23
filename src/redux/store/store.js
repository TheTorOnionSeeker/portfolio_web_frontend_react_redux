/* import { configureStore} from "@reduxjs/toolkit";
import {getCharacterDetailSlice} from './slices'; */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;

/* export const store=configureStore({
    reducer:{
        details:getCharacterDetailSlice.reducer,
    },
}) */