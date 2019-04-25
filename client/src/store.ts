import { createStore } from 'redux';

import rootReducers from './reducers';

export default () => {
  const store = createStore(rootReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

  return { store };
};