import React from "react";
import "./App.css";
import { Box, Typography } from "@material-ui/core";
import { NetworkStatus } from "@apollo/client";
import { Routes, Route, Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Items, useGetItemsQuery } from "./output-types";
import { ITEMS } from "./graphQl";
import AddItemForm from "./components/AddItemForm";
import ItemSummary from "./components/ItemSummary";
import ItemDetailed from "./components/ItemDetailed";
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
  // const { error, data, networkStatus } = useGetItemLinksQuery({
  //   notifyOnNetworkStatusChange: true,
  // });

  const { data, networkStatus, error } = useGetItemsQuery({
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
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Typography variant="h1">Treasury</Typography>
              <Typography variant="h2">Your Items</Typography>
              {networkStatus === NetworkStatus.refetch && "Refetching!"}
              {networkStatus === NetworkStatus.loading && "loading..."}
              {error && `Error! ${error.message}`}
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                {data?.Items.map(({ id, title, image_url }: Items) => (
                  <ItemSummary
                    id={id}
                    title={title}
                    image_url={image_url}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </Box>
            </>
          }
        />
        <Route path="/*">
          <Route path=":id" element={<ItemDetailed />} />
        </Route>
      </Routes>
      <AddItemForm />
    </Box>
  );
};

export default App;
