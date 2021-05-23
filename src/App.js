import React from 'react';

import { Header, Navigation } from './components/index';
import { Trending, Movies, Series, Search } from './pages'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider, Container } from '@material-ui/core';
import { Loading } from './components';
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
  // typography: {
  //   fontFamily: 'Quicksand',
  //   fontWeightLight: 400,
  //   fontWeightRegular: 500,
  //   fontWeightMedium: 600,
  //   fontWeightBold: 700,
  // }
})


// danger Color #e50914
// black color #222
// grey color #303030
// light #ffffff

const App = () => {

  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <div className='app'>
          <Container maxWidth="xl">
            <Switch>
              <Route exact path='/' >
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
            </Switch>
          </Container>
        </div>
        <Navigation />
      </ThemeProvider>
    </Router>
  );
}

export default App;
