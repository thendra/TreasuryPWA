import React from "react";
import { Box, Fab, Typography, Theme } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, Pick<IItemSummary, "imageUrl">>(
  (theme: Theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: "15px",
    },
    optionList: {
      display: "flex",
    },
    card: {
      width: "300px",
      height: "400px",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      "&:hover": {
        "& $details": {
          transform: "none",
          "& a": {
            transform: "none",
          },
        },
        "& img": {
          transform: "scale(1.2)",
        },
      },
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "all 0.3s",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        flex: "1 1 100%",
      },
    },
    details: {
      boxSizing: "border-box",
      position: "absolute",
      bottom: 0,
      left: 0,
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: `${20}px ${10}px`,
      transform: "translateY(100%)",
      transition: "all 0.3s",
      [theme.breakpoints.down("xs")]: {
        "& h2": {
          fontSize: "14px",
        },
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
    <Box className={classes.container}>
      <Box className={classes.card}>
        <img src={imageUrl} alt={title} />
        <Box className={classes.details}>
          <Typography variant="h5">{title}</Typography>
          <Fab onClick={() => onRemove(id)} color="primary" aria-label="delete">
            <DeleteIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemSummary;
