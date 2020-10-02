import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import ImageUpload from "../ImageUpload";
import { ADD_ITEM, ITEMS } from "../../graphQl";

const AddItemForm = () => {
  const [addItem] = useMutation(ADD_ITEM);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    addItem({
      variables: {
        id: uuidv4(),
        title: title,
        description: description,
        image_url: imageUrl,
      },
      refetchQueries: [{ query: ITEMS }],
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <>
      <Fab onClick={() => setModalOpen(true)} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box p={2}>
          <Typography variant="h2">Item upload</Typography>
          <form noValidate autoComplete="off" onSubmit={handleAddItem}>
            {imageUrl === "" ? null : (
              <Box display="flex" justifyContent="center">
                <img
                  style={{ width: "200px" }}
                  alt="uploaded_image"
                  src={imageUrl}
                />
              </Box>
            )}
            <Box display="flex" justifyContent="center" my={2}>
              <TextField
                value={title}
                variant="outlined"
                id="title-input"
                label="Title"
                onChange={handleTitleChange}
                color="primary"
              />
            </Box>
            <Box display="flex" justifyContent="center" my={2}>
              <TextField
                value={description}
                variant="outlined"
                id="title-input"
                label="Description"
                multiline
                onChange={handleDescChange}
                color="primary"
              />
            </Box>
            <Box display="flex" justifyContent="center" pb={2}>
              <ImageUpload onUpload={setImageUrl} />
            </Box>
            <Box display="flex" justifyContent="center" pb={2}>
              <Button
                variant="contained"
                type="submit"
                onClick={() => setModalOpen(false)}
              >
                Add Item
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default AddItemForm;
