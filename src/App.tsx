import React, { useState } from "react";
import "./App.css";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";
import {
  useQuery,
  NetworkStatus,
  useMutation,
  useApolloClient,
} from "@apollo/client";
import { ITEMS, ADD_ITEM, ADD_ITEM_FRAGMENT } from "./graphQl";

const App = () => {
  const { error, data, networkStatus } = useQuery(ITEMS, {
    notifyOnNetworkStatusChange: true,
  });
  const [addItem, { data: result }] = useMutation(ADD_ITEM);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    addItem({ variables: { title: title } });
    setTitle("");
  };

  return (
    <Box className="App">
      <header className="App-header">
        <Typography>
          {networkStatus === NetworkStatus.refetch && "Refetching!"}
          {networkStatus === NetworkStatus.loading && "loading..."}
          {error && `Error! ${error.message}`}
          {data?.Items.map(({ id, title }: { id: number; title: string }) => (
            <Typography>{`${id} ${title}`}</Typography>
          ))}
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleAddItem}>
          <TextField
            value={title}
            variant="outlined"
            id="title-input"
            label="Title"
            onChange={handleTitleChange}
            color="primary"
          />
          <Button variant="contained" type="submit">
            Add Item
          </Button>
        </form>
      </header>
      <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
    </Box>
  );
};

export default App;
