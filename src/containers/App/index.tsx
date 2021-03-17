import Layout from '@Containers/Layout';
import configureStore from '@Store/configStore';
import GlobalFonts from '@Styles/globalFonts';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalFonts />
        <Layout />
      </PersistGate>
    </Provider>
  );
};

export default App;
