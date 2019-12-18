import React from 'react'
import Login from './src/pages/Login';
import Index from './src/pages/Index';
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter, Route, Link} from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const App = () => {
  return (
    <BrowserRouter>
      <>
      <GlobalStyle/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/index" component={Index}/>
        
      {/* <Login/> */}
      {/* <Index/> */}
      </>
    </BrowserRouter>
  );
}

export default App;