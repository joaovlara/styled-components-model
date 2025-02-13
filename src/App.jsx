import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        app
      </div>
    </ThemeProvider>
  )
}

export default App
