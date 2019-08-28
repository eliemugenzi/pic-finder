import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainRouter from './components/Router';
import "./assets/main.scss";

const App = () => (
  <MuiThemeProvider>
    <MainRouter />
  </MuiThemeProvider>
)

export default App;