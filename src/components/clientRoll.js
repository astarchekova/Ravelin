import React from "react";
import { Typography } from '@material-ui/core';
import ClientLogo from "../images/clientLogos.png";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
    },
    logos: {
        marginTop: "30px",
        width: "1180px",
        height: "38.71px"
    },
    typoghraphy: {
        fontFamily: "SF Mono",
    }

}));


export default function ClientRoll() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.typoghraphy}>The world’s leading online businesses trust Ravelin to manage risk</Typography>
            <img className={classes.logos} src={ClientLogo} />
        </div>
    )
}