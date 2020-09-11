import React from 'react';
import './App.css';
import {Container, Grid} from '@material-ui/core';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container direction="column" spacing={1} justify="space-between" alignItems="center">
          <Grid item xs={2}> 
            <Header /> 
          </Grid>
          <Grid item xs={8}> 
            <Body />
          </Grid>
          <Grid item xs={2}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
