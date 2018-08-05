import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
