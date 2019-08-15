import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Main App
import SoftDevApp from './SoftDevApp';

// Material UI theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SoftDevApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
