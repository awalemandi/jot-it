import React from 'react';
import {Grid} from '@material-ui/core';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
          <Header />
          <Body />
          <Footer />
       {/*  <Grid container direction="column" spacing={3} justify="space-between" alignItems="center">
          
          <Grid item xs={12}> 
            <Header /> 
          </Grid>
          <Grid item xs={12}> 
            <Body />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid> 
        </Grid>*/}
    </div>
  );
}

export default App;
