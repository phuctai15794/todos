import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './store/reducers/rootReducer';

const persistConfig = {
    key: 'todos',
    storage: storage,
    whitelist: ['list'],
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);

export let persistor = persistStore(store);
export default store;
