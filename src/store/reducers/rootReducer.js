import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import appReducer from './appReducer';
import todoReducer from './todoReducer';

// Config persist root 
const rootPersistConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
};

// Config persist app 
const appPersistConfig = {
    ...rootPersistConfig,
    key: 'app'
};

// Config persist todo 
const todoPersistConfig = {
    ...rootPersistConfig,
    key: 'todos',
    whitelist: ['list']
};

// Combine reducers
const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
    todo: persistReducer(todoPersistConfig, todoReducer),
});

export default rootReducer;
