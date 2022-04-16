import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './store/reducers/rootReducer';

// Create store with reducer
let store = createStore(rootReducer);

export let persistor = persistStore(store);
export default store;
