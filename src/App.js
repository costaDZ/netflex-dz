import React from 'react';

import { Header, Navigation } from './components/index';
import { Overlay, Trending, Movies, Series, Search } from './pages'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider, Container } from '@material-ui/core';
import { Loading, DetailsModal } from './components';
import { useGlobalContext } from './context';





const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e50914'
    },
    secondary: {
      main: '#222'
    },
  },
})



const App = () => {

  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <DetailsModal />
        <div className='app'>
          <Switch>
            <Route exact path='/'>
              <Overlay />
            </Route>
            <Container maxWidth="xl">
              <Route path='/trending' >
                <Trending />
              </Route>
              <Route path='/movies' >
                <Movies />
              </Route>
              <Route path='/series' >
                <Series />
              </Route>
              <Route path='/search' >
                <Search />
              </Route>
            </Container>
          </Switch>
        </div>
        <Navigation />
      </ThemeProvider>
    </Router>
  );
}

export default App;


  // typography: {
  //   fontFamily: 'Quicksand',
  //   fontWeightLight: 400,
  //   fontWeightRegular: 500,
  //   fontWeightMedium: 600,
  //   fontWeightBold: 700,
  // }
// danger Color #e50914
// black color #222
// grey color #303030
// light #ffffff

