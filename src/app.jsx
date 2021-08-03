import { MuiThemeProvider } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { graphql } from 'react-apollo';

const App = () => {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Header />
        <Products />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
