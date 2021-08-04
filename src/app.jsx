import { MuiThemeProvider } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main'

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Header />
        <Main />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
