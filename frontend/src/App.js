import React from 'react';
import Routes from './routes';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700|Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    width: 100%;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes />
    </div>
  );
}

export default App;
