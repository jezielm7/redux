import createStore from "./createStore";
import rootReducer from './modules/RootReducer';

const store = createStore(rootReducer, []);

export { store };