import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Externals
import { Provider } from 'react-redux';
import store from './store';

// Main App
import SoftDevApp from './SoftDevApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <SoftDevApp />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
