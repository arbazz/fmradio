
import 'react-native-gesture-handler';

import React from 'react';
import Navigation from './src/navigation';
import Store from './src/redux/index';
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-native-fast-toast'


const App: () => React$Node = () => {
  return (
    <>
      <Provider store={Store}>
        <ToastProvider>
          <Navigation />
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
