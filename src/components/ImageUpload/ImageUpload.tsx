import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dropzone from "react-dropzone";
import request from "superagent";

interface IImageUpload {
  onUpload: (uploadUrl: string) => void;
}

const ImageUpload = ({ onUpload }: IImageUpload) => {
  const CLOUDINARY_UPLOAD_PRESET = "imdbo67t";
  const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/dqtlei5j1/upload";

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
        onUpload(response.body.secure_url);
      }
    });
  };
  const handleDrop = useCallback((acceptedFiles: any) => {
    handleImageUpload(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
      Upload image
      <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    </Button>
  );
};

export default ImageUpload;
