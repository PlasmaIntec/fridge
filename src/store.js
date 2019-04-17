import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import defaultState from './defaultState';
const savedState = JSON.parse(localStorage.getItem('__STATE'));
const initialState = savedState || defaultState; // allow client-based sessions

const sessionSaver = store => next => action => {
    let result = next(action);
    localStorage.setItem('__STATE', JSON.stringify(store.getState()));
    return result;
}

let middleware = applyMiddleware(sessionSaver);
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sessionSaver));
}

const store = createStore(
    rootReducer,
    initialState,
    middleware
)

export default store;