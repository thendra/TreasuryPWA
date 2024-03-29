import React from "react";
import { Link } from "react-router-dom";
import { Box, Fab, Typography, Theme } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Items } from "../../output-types";

const useStyles = makeStyles<Theme, Pick<IItemSummary, "image_url">>(
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
        backgroundColor: "#6f6866",
        width: "100%",
        height: "100%",
        objectFit: "scale-down",
        transition: "all 0.3s",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        flex: "1 1 100%",
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
    },
    details: {
      boxSizing: "border-box",
      position: "absolute",
      bottom: 0,
      left: 0,
      display: "flex",
      width: "100%",
      color: "#fff",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#38302e",
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

export interface IItemSummary extends Items {
  onRemove?: (id: string) => void;
  canDelete?: boolean;
}

const ItemSummary = ({
  id,
  title,
  image_url,
  onRemove,
  canDelete,
}: IItemSummary) => {
  const classes = useStyles({ image_url });

  return (
    <Box className={classes.container}>
      <Box className={classes.card}>
        <Link to={`/${id}`}>
          <img src={image_url || ""} alt={title || ""} />
        </Link>
        <Box className={classes.details}>
          <Typography variant="h5">{title}</Typography>
          {(canDelete && !!onRemove) && (
            <Fab
              onClick={() => onRemove(id)}
              color="primary"
              aria-label="delete"
            >
              <DeleteIcon />
            </Fab>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemSummary;
