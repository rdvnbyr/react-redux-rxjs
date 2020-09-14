import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { epics } from './epics';

import { sessionReducer } from './reducer';

// now we generate an application history object.
export const routeHistory = createHashHistory();

// and other needed middleware stuff, so we can actually compose it all
const epicMiddleware = createEpicMiddleware();
// now we generate the middleware
const middleware = compose(
    applyMiddleware(
        epicMiddleware,
        routerMiddleware(routeHistory)
    ),
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

// then we create the main reducer, by combining all other reducers
const mainReducer = combineReducers({
    router: connectRouter(routeHistory),
    session: sessionReducer
});

const persistConfig = {
    key: 'application',
    storage,
    blacklist: [ 'sessionReducer' ]
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { 
    store, 
    persistor
};

epicMiddleware.run(epics);
