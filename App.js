import React from 'react';
import {Navigation} from './src/infrastructure/navigations/index';
import {Provider} from 'react-redux';
import {Store} from './src/store/index';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;