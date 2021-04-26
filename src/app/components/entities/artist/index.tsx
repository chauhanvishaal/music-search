import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { Props } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    artistContainer: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    medium: {
      width: "75px",
      height: "75px",
    },
  })
);

export function Artist(props: Props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.artistContainer}>
      <Avatar alt="" src={"#"} className={classes.medium} />
      <div>
        <Typography component="h5" variant="h5">
          {data.artistName}
        </Typography>
        {data.primaryGenreName && (
          <Typography component="span"> {data.primaryGenreName}</Typography>
        )}
      </div>
    </div>
  );
}
