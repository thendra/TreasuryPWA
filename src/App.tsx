import React from "react";
import "./App.css";
import { Box, Typography } from "@material-ui/core";
import { useQuery, NetworkStatus } from "@apollo/client";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ITEMS } from "./graphQl";
import AddItemForm from "./components/AddItemForm";
import ItemSummary from "./components/ItemSummary";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "./graphQl";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    width: "calc(100% - 40px)",
    padding: `${30}px ${20}px`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: `${30}px 0`,
    },
    margin: "auto",
    textAlign: "center",
  },
  media: {
    height: 200,
  },
}));

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
    <Box className={classes.app}>
      <Typography variant="h1">Treasury</Typography>
      <Typography variant="h2">Your Items</Typography>
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {data?.Items.map(({ id, title, description, image_url }: IItem) => (
          <ItemSummary
            id={id}
            title={title}
            description={description}
            imageUrl={image_url}
            onRemove={handleRemoveItem}
          />
        ))}
      </Box>
      <AddItemForm />
    </Box>
  );
};

export default App;
