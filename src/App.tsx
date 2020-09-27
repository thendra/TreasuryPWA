import React from "react";
import "./App.css";
import { Box, Typography } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";
import { useQuery, NetworkStatus } from "@apollo/client";
import { ITEMS } from "./graphQl";
import AddItemForm from "./components/AddItemForm";

const App = () => {
  const { error, data, networkStatus } = useQuery(ITEMS, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Box className="App">
      {networkStatus === NetworkStatus.refetch && "Refetching!"}
      {networkStatus === NetworkStatus.loading && "loading..."}
      {error && `Error! ${error.message}`}
      {data?.Items.map(
        ({
          id,
          title,
          description,
        }: {
          id: string;
          title: string;
          description: string;
        }) => (
          <Box m={2} p={2} key={id} border="1px solid" borderRadius="5px">
            <Typography variant="h4">{title}</Typography>
            <Typography key={description}>{description}</Typography>
          </Box>
        )
      )}
      <AddItemForm />
      <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
    </Box>
  );
};

export default App;
