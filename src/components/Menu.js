import React from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../images/Logo.png";
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Graphs from '../images/graph.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        width: "1240px",
        height: "612px",
        fontFamily: "SF Mono",
        backgroundImage: `url(${Graphs})`,
        clipPath: "polygon(170% 0%, 0 0, 0 119%)",
        color: "white",
    },
    appBar: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginTop: "93px",
        marginLeft: "116.51px",
        width: "631px",
        height: "42px",

    },
    logo: {
        width: "148.36px",
        height: "40.92px",
    },
    link: {
        color: "white",
        fontSize: "16px",
        fontFamily: "SF Mono",
    },
    nav: {
        width: "402px",
        height: "19px",
        display: 'flex',
        justifyContent: "space-evenly",
        marginLeft: "60px",
        alignItems: "center",
        margin: "10px"
    },
    summary: {
        width: "664px",
        height: "190px",
        marginLeft: "116px",
        marginTop: "71px",

    },
    button: {
        backgroundColor: "#1F9BF4",
        color: "white",
        fontSize: "12px",
        padding: "10px",
        width: "150px",
    },
    typoghraphy: {
        marginBottom: "20px",
        fontFamily: "SF Mono",
    }

}));



export default function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.appBar}>
                <img src={Logo} className={classes.logo} />
                <div className={classes.nav}>
                    <Link className={classes.link}>Solutions</Link>
                    <Link className={classes.link}>Insights</Link>
                    <Link className={classes.link}>Resources </Link>
                    <Link className={classes.link}>Company </Link>
                </div>
            </div>
            <div className={classes.summary}>
                <Typography className={classes.typoghraphy}
                    variant="h3"
                    component="body">
                    Make smarter decisions
                </Typography>
                <Typography className={classes.typoghraphy}
                    variant="body2"
                    component="p">
                    Ravelin provides technology and support to help you prevent<br />
                    evolving fraud threats and accept payments with confidence.
                </Typography>
                <Button className={classes.button}>View solutions</Button>
            </div>
        </div >
    )
}