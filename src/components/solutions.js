import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    solutions: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
    },
    root: {
        display: "flex",
        flexDirection: "row",
        width: "1180px",
        justifyContent: "space-evenly",
    },
    card: {
        width: "264px",
        height: "266px",
        boxShadow: "0px 0px 17px rgba(0, 0, 0, 0.11)",
        borderRadius: "20px",

    },
    title: {
        fontWeight: "bold",
        marginBottom: "15px",
        fontFamily: "SF Mono",
    },
    text: {
        height: "85px",
        fontFamily: "SF Mono",
    },
    cardActionArea: {
        marginBlock: "20px",
    },
    typography: {
        fontSize: "27px",
        fontWeight: "bold",
        marginBottom: "30px",
        fontFamily: "SF Mono",

    }

});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={classes.solutions}>
            <Typography className={classes.typography}>Learn more about our solutions</Typography>
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardContent>
                            <Typography className={classes.title}
                                style={{ color: "#2749FF" }}
                                variant="h5"
                                component="h2">
                                Detect
                            </Typography>
                            <Typography className={classes.text}
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                Understand the risk score for every customer from the moment they land on your website.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card >
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardContent>
                            <Typography className={classes.title}
                                style={{ color: "#31C9AD" }}
                                variant="h5"
                                component="h2">
                                Accept
                            </Typography>
                            <Typography className={classes.text}
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                Manage global regulation and route every payment to the path with the best chance of acceptance.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card >
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardContent>
                            <Typography className={classes.title}
                                style={{ color: "#EC4E6E" }}
                                variant="h5"
                                component="h2">
                                Connect
                            </Typography>
                            <Typography className={classes.text}
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                Link analysis to power your investigations, makes machine learning models more effective.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card >
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardContent>
                            <Typography className={classes.title}
                                style={{ color: "#7056F8" }}
                                variant="h5"
                                component="h2">
                                Protect
                            </Typography>
                            <Typography className={classes.text}
                                variant="body2"
                                color="textSecondary"
                                component="p">
                                Use machine learning models trained on your customer data to quickly detect unusual activity and flag when an account has been hacked.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card >
            </div>
        </div>
    );
}