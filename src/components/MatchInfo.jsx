import { Button, Card, CardContent, Typography, CardActions, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from 'react';
import { getMatchDetail } from "../api/API";
import vs from '../img/vs-img.png';

const MatchInfo = ({ match }) => {

    const [detail, setDetails] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchDetail(id)
            .then((data) => {
                setDetails(data);
                handleOpen();
            })
            .catch((error) => console.log("Error"))
    }
    const getMatchCard = () => {
        return (
            <Card style={{ marginTop: 20, padding: 20 }}>
                <CardContent>
                    <Grid container justify="center" spacing={4} alignItems="center">
                        <Grid item style={{ width: 150 }}>
                            <Typography variant="h5">{match['team-1']}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 95 }} src={vs} alt="vsImg" />
                        </Grid>
                        <Grid item style={{ width: 150 }}>
                            <Typography variant="h5">{match['team-2']}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button style={{ marginTop: 5 }} item variant="outlined" color="primary">
                            Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                        <Button style={{ marginLeft: 5, marginTop: 5 }} item variant="contained" color="primary" onClick={() => handleClick(match.unique_id)}>
                            Show Detail
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match: <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.matchStarted ? "Started" : "Still Not Started"}</span>
                    </Typography>
                    <Typography>
                        Score: <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.score}</span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    )
}
export default MatchInfo