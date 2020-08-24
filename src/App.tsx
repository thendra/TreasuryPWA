import React from "react";
import "./App.css";
import { Box, Typography, Button } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";
import { useQuery, NetworkStatus } from "@apollo/client";
import { ITEMS } from "./graphQl";

const App = () => {
  const { error, data, refetch, networkStatus } = useQuery(ITEMS, {
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Box className="App">
      <header className="App-header">
        <Typography>
          {networkStatus === NetworkStatus.refetch && "Refetching!"}
          {networkStatus === NetworkStatus.loading && "loading..."}
          {error && `Error! ${error.message}`}
          {data?.Items.map(({ id, Title }: { id: number; Title: string }) => (
            <Typography>{`${id} ${Title}`}</Typography>
          ))}
        </Typography>
        <Button variant="contained" onClick={() => refetch()}>
          Refetch!
        </Button>
      </header>
      <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
    </Box>
  );
};

export default App;
