import React from "react";
import "./App.css";
import { Box, Button, Typography } from "@material-ui/core";
import { useQuery, NetworkStatus } from "@apollo/client";
import { ITEMS } from "./graphQl";
import AddItemForm from "./components/AddItemForm";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "./graphQl";

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

  return (
    <Box className="App">
      <Typography variant="h1">Treasury</Typography>
      <Typography variant="h2">Your Items</Typography>
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      {data?.Items.map(({ id, title, description, image_url }: IItem) => (
        <Box m={2} p={2} key={id} border="1px solid" borderRadius="5px">
          <Typography variant="h4">{title}</Typography>
          {image_url && (
            <Box display="flex" justifyContent="center">
              <img
                style={{ width: "200px" }}
                alt="uploaded_image"
                src={image_url}
              />
            </Box>
          )}
          <Typography key={description}>{description}</Typography>
          <Box py={2}>
            <Button variant="contained" onClick={() => handleRemoveItem(id)}>
              Remove Item
            </Button>
          </Box>
        </Box>
      ))}
      <AddItemForm />
    </Box>
  );
};

export default App;
