import React, { useCallback, useState } from "react";
import "./App.css";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "imdbo67t";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dqtlei5j1/upload";

function App() {
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
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {uploadedUrl === "" ? null : (
                  <div>
                    <img
                      style={{ width: "500px", display: "flex" }}
                      alt="uploaded_image"
                      src={uploadedUrl}
                    />
                  </div>
                )}
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default App;
