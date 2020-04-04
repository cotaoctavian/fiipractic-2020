import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counter';
import userReducers from './reducers/userReducers';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducers
});

const store = createStore(rootReducer, devTool);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
