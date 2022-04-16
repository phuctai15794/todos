import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import todoReducer from './todoReducer';

// Config persist root 
const rootPersistConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
};

// Config persist todo 
const todoPersistConfig = {
    ...rootPersistConfig,
    key: 'todos',
    whitelist: ['list']
};

// Combine reducers
const rootReducer = combineReducers({
    todo: persistReducer(todoPersistConfig, todoReducer),
});

export default rootReducer;
