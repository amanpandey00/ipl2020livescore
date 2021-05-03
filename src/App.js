import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MatchInfo from './components/MatchInfo';
import { getMathes } from './api/API';

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMathes()
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((error) => console.log("Could not load Data"));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h4" style={{marginTop: 20}}>Welcome To IPL 2021 Live Score</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
          <Grid sm="8">
            {
              matches.map((match) => (
                <Fragment key={match.unique_id}>
                  {
                    (match.type=="" ? (<MatchInfo  match={match} />) : (""))
                  }
                </Fragment>
              ))
            }
        </Grid>
      </Grid>
      {}
    </div>
  );
}

export default App;
