import React from "react";
import "./App.css";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useQuery, NetworkStatus } from "@apollo/client";
import { ITEMS } from "./graphQl";
import AddItemForm from "./components/AddItemForm";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "./graphQl";

const useStyles = makeStyles({
  card: {
    width: "250px",
    margin: 32,
  },
  media: {
    height: 200,
  },
});

const App = () => {
  interface IItem {
    id: string;
    title: string;
    description: string;
    image_url: string;
  }

  const { error, data, networkStatus } = useQuery(ITEMS, {
    notifyOnNetworkStatusChange: true,
  });
  const [removeItem] = useMutation(REMOVE_ITEM);

  const handleRemoveItem = (id: String) => {
    removeItem({
      variables: { id },
      refetchQueries: [{ query: ITEMS }],
    });
  };
  const classes = useStyles();

  return (
    <Box className="App">
      <Typography variant="h1">Treasury</Typography>
      <Typography variant="h2">Your Items</Typography>
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      <Box display="flex" flexWrap="wrap">
        {data?.Items.map(({ id, title, description, image_url }: IItem) => (
          <Card className={classes.card}>
            <Typography variant="h4">{title}</Typography>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image_url}
                title={title}
              />
            </CardActionArea>
            <Typography key={description}>{description}</Typography>
            <Box py={2}>
              <Button variant="contained" onClick={() => handleRemoveItem(id)}>
                Remove Item
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
      <AddItemForm />
    </Box>
  );
};

export default App;
