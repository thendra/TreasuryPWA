import React, { useCallback, useState } from "react";
import { Button, Box } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dropzone from "react-dropzone";
import request from "superagent";

interface IImageUpload {
  label: string;
  onUpload: (uploadUrl: string) => void;
}

const ImageUpload = ({ label, onUpload }: IImageUpload) => {
  const CLOUDINARY_UPLOAD_PRESET = "imdbo67t";
  const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/dqtlei5j1/upload";

  const [uploadedUrl, setUploadedUrl] = useState("");
  const handleImageUpload = (file: any) => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        console.log(response);
        setUploadedUrl(response.body.secure_url);
        onUpload(response.body.secure_url);
      }
    });
  };
  const handleDrop = useCallback((acceptedFiles: any) => {
    handleImageUpload(acceptedFiles[0]);
  }, []);

  return (
    <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {uploadedUrl === "" ? null : (
            <Box>
              <img
                style={{ width: "100px", display: "flex" }}
                alt="uploaded_image"
                src={uploadedUrl}
              />
            </Box>
          )}
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            {label}
          </Button>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
