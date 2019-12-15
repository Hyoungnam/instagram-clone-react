import React from 'react'
import Login from './src/pages/Login';
import Index from './src/pages/Index';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const App = () => {
  return (
    <>
      <GlobalStyle/>
      {/* <Login/> */}
      <Index/>
    </>
  );
}

export default App;