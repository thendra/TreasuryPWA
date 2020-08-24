import React, { useCallback, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import Dropzone from "react-dropzone";
import request from "superagent";

interface IImageUpload {
  label: string;
}

const ImageUpload = ({ label }: IImageUpload) => {
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
      }
    });
  };
  const handleDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    handleImageUpload(acceptedFiles[0]);
  }, []);

  return (
    <Box>
      <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {uploadedUrl === "" ? null : (
              <Box>
                <img
                  style={{ width: "500px", display: "flex" }}
                  alt="uploaded_image"
                  src={uploadedUrl}
                />
              </Box>
            )}
            <Typography>{label}</Typography>
          </div>
        )}
      </Dropzone>
    </Box>
  );
};

export default ImageUpload;
