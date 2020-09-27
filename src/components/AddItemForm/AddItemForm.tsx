import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

import { ADD_ITEM } from "../../graphQl";

interface IAddItemForm {}

const AddItemForm = ({}: IAddItemForm) => {
  const [addItem] = useMutation(ADD_ITEM);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      variables: { id: uuidv4(), title: title, description: description },
    });
    setTitle("");
    setDescription("");
  };

  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={handleAddItem}>
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
        <Button variant="contained" type="submit">
          Add Item
        </Button>
      </form>
    </Box>
  );
};

export default AddItemForm;
