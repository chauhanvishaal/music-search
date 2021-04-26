import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Props } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginTop: "10px"
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "50%",
    },
    cover: {
      width: 151,
    },
  })
);

export function Song(props: Props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {data.trackName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {data.artistName}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image={data.artworkUrl100}
        title="Live from space album cover"
      />
    </Card>
  );
}
