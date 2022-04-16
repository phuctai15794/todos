import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { createStateSyncMiddleware } from 'redux-state-sync';
// import actionTypes from './store/actions/actionTypes';
import rootReducer from './store/reducers/rootReducer';

// Config state sync
const configStateSync = {
    whitelist: null, // Null for sync all actions
    blacklist: null // Null for sync all actions
};

// Create middlewares reducer
const middlewares = [createStateSyncMiddleware(configStateSync)];

// Create store with reducer
let store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export let persistor = persistStore(store);
export default store;
