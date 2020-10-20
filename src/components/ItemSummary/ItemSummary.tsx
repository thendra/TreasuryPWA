import React from "react";
import { Box, Button, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, Pick<IItemSummary, "imageUrl">>(
  (theme: Theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      maxHeight: "400px",
      minWidth: "250px",
      minHeight: "250px",
      [theme.breakpoints.down("md")]: {
        flex: 1,
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "300px",
      },
    },
    hoverWrapper: {
      flex: 1,
      position: "relative",
    },
    card: ({ imageUrl }) => ({
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundImage: `url(${imageUrl})`,
      "&:hover": {
        opacity: 0.2,
      },
    }),
    media: {
      height: 200,
    },
    hoverArea: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0,
      "&:hover": {
        opacity: 0.8,
        backgroundColor: "white",
      },
    },
  })
);

interface IItemSummary {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  onRemove: (id: string) => void;
}

const ItemSummary = ({
  id,
  title,
  description,
  imageUrl,
  onRemove,
}: IItemSummary) => {
  const classes = useStyles({ imageUrl });
  console.log(imageUrl);
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.hoverWrapper}>
        <Box className={classes.card} />
        <Box className={classes.hoverArea}>
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography key={description}>{description}</Typography>
            <Box py={2}></Box>
          </Box>
        </Box>
      </Box>
      <Button variant="contained" onClick={() => onRemove(id)}>
        Remove Item
      </Button>
    </Box>
  );
};

export default ItemSummary;
