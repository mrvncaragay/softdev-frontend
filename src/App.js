import React from 'react';
import { Router } from 'react-router-dom';

// Externals
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import history from 'util/history';
import { PersistGate } from 'redux-persist/integration/react';

// Main App
import SoftDevApp from './SoftDevApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SoftDevApp />
          </PersistGate>
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
