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
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
