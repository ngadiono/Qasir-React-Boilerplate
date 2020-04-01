import Reducer from './reducers';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// import {MiddlewareClientSetup as middlewareClientSetup} from '@qasir/security'
// import middlewareCheckLogin from "@qasir/auth/middlewareCheckLogin"

export const history = createHistory();
const router = routerMiddleware(history);
const initiateMiddlewares = [router, thunk];

export const store = createStore(
  Reducer,
  composeWithDevTools(
    applyMiddleware(
      ...initiateMiddlewares
      // middlewareClientSetup,
      // middlewareCheckLogin
    )
  )
);
