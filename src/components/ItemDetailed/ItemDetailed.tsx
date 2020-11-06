import React from "react";
import { Theme, Box, Typography } from "@material-ui/core";
import { NetworkStatus } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useGetItemByIdQuery } from "../../output-types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  mainImage: {
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const ItemDetailed = () => {
  const { id } = useParams();

  const { data, networkStatus, error } = useGetItemByIdQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      itemId: id,
    },
  });
  const classes = useStyles();

  const item = data?.Items_by_pk;

  return (
    <Box className={classes.root}>
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      {item && (
        <>
          <img
            className={classes.mainImage}
            src={item?.image_url || ""}
            alt={item?.title}
          />
          <Box paddingLeft={2} paddingRight={2}>
            <Typography align="left" variant="h1">
              {item?.title}
            </Typography>
            <Typography align="left" variant="body1">
              {item?.description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ItemDetailed;
