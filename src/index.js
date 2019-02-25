import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import App from '../src/containers/App';
import Modify from './containers/Update';
import View from '../src/containers/View';
import Login from '../src/containers/Login';
import '../styles/index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import sagas from './sagas/index.saga';
import history from './history';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
 );
 sagaMiddleware.run(sagas);

ReactDOM.render(<Provider store={store}>
<Router history={history}    >
<div>
    <Route path="/" exact component={App}/>
    <Route path="/view" component={View}/>
    <Route path="/login" component={Login}/>
    <Route path="/update/:noteId" component={Modify}/>
</div>
</Router></Provider>, document.getElementById("container"));

