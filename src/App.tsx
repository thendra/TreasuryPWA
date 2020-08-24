import React, { useCallback, useState } from "react";
import "./App.css";
import { Box, Typography } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";

const App = () => (
  <Box className="App">
    <header className="App-header">
      <Typography>
        Edit <code>src/App.tsx</code> and save to reload.
      </Typography>
    </header>
    <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
  </Box>
);

export default App;
