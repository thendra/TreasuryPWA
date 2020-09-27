import React from "react";
import "./App.css";
import { Box, Button, Typography } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";
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
  }

  const { error, data, networkStatus } = useQuery(ITEMS, {
    notifyOnNetworkStatusChange: true,
  });
  const [removeItem] = useMutation(REMOVE_ITEM);

  const handleRemoveItem = (id: String) => {
    removeItem({
      variables: { id },
    });
  };

  return (
    <Box className="App">
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      {data?.Items.map(({ id, title, description }: IItem) => (
        <Box m={2} p={2} key={id} border="1px solid" borderRadius="5px">
          <Typography variant="h4">{title}</Typography>
          <Typography key={description}>{description}</Typography>
          <Box py={2}>
            <Button variant="contained" onClick={() => handleRemoveItem(id)}>
              Remove Item
            </Button>
          </Box>
        </Box>
      ))}
      <AddItemForm />
      <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
    </Box>
  );
};

export default App;
