import React, { useState } from "react";
import axios from "axios";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import ImageUpload from "./ImageUpload";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const URL = "http://localhost:5500/upload/";
  const submitHandler = (e) => {
    e.preventDefault();

    // get the selected file from the input

    const file = e.target.file;
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("file", file[0]);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post(URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // handle the response
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server="http://localhost:5500/upload"
        name="file" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />

      <ImageUpload />

      {/* <div>
        <form
          // onSubmit={submitHandler}
          action="http://localhost:5500/upload/"
          method="post"
          encType="mutipart/form-data"
          accept="image/*"
        >
          <input type="file" name="file" />
          <input
            type="submit"
            value="Upload"
            className=" btn-accent btn-square btn-wide"
          />
        </form>
      </div>*/}
    </div>
  );
};

export default FileUpload;
