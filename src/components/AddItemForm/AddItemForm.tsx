import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  CircularProgress,
  Checkbox,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { userInfo } from "../../components/AppProvider";
import ImageUpload from "../ImageUpload";
import { ADD_ITEM, GET_ITEMS } from "../../graphQl/queries";
import { AdditemMutation } from "../../output-types";

interface IAddItemForm {
  open: boolean;
  onClose: () => void;
}

const AddItemForm = ({ open, onClose }: IAddItemForm) => {
  const { user } = userInfo();
  const [addItem] = useMutation<AdditemMutation>(ADD_ITEM);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.checked);
  };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    addItem({
      variables: {
        id: uuidv4(),
        title: title,
        description: description,
        image_url: imageUrl,
        user_id: user?.id,
        is_public: isPublic,
      },
      refetchQueries: [{ query: GET_ITEMS }],
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box p={2}>
        <Typography variant="h2">New Item</Typography>
        <form noValidate autoComplete="off" onSubmit={handleAddItem}>
          {(imageUrl || imageLoading) && (
            <Box display="flex" justifyContent="center">
              {imageLoading && <CircularProgress />}
              {imageUrl && (
                <img
                  style={{ width: "200px" }}
                  alt="uploaded_image"
                  src={imageUrl}
                />
              )}
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
            <ImageUpload
              label="Main image"
              setImageLoading={setImageLoading}
              onUpload={setImageUrl}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pb={2}
          >
            <Checkbox
              checked={isPublic}
              onChange={handleIsPublicChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="caption">Make Public</Typography>
          </Box>
          <Box display="flex" justifyContent="center" pb={2}>
            <Button
              variant="contained"
              type="submit"
              disabled={imageLoading}
              onClick={onClose}
            >
              Add Item
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default AddItemForm;
