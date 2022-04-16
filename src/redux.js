import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const reduxStore = createStore(rootReducer);

export default reduxStore;
