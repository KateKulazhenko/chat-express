import * as React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import Auth from './modules/Auth';

const { store } = createStore();

const App = () => {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
}

export default App;
