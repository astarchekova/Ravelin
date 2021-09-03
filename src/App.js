import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Menu from "./components/Menu";
import Background from "./images/bg.png";
import Fragments from "./images/fragments.png";
import ClientRoll from "./components/clientRoll";
import Solutions from "./components/solutions"



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "centre",
    alignItems: "centre",
    fontFamily: "Monospace",
  },
  paper: {
    width: "1440px",
    height: "1263px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat"
  },
  top: {
    display: "flex",

  },
  fragments: {
    width: "636.87px",
    height: "589.61px",
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}
        elevation={3}
        variant="outlined"
      >
        <div className={classes.top}>
          <Menu />
          <img className={classes.fragments} src={Fragments} />
        </div>
        <ClientRoll />
        <Solutions />
      </Paper>
    </div>
  );
}