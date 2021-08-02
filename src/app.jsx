import { MuiThemeProvider } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { graphql } from 'react-apollo';
import { productsQuery } from './components/Products/queries'


function App(props) {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Header />
        <Products />
        {console.log(props)}
      </MuiThemeProvider>
    </div>
  );
}

const AppWithData = graphql(productsQuery)(App)

export default AppWithData;
