import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import MobileHome from '../pages/MobileHome';
import NotFound from '../pages/NotFound';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },});

const screenSize = window.innerWidth;

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Switch>
        <Route exact path='/ahoralegal' component={screenSize > 800 ? Home : MobileHome} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;