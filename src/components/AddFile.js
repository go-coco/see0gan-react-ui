import {useState} from 'react'
import axios from 'axios'

export const AddFile = () => {
  
    const [file, setFile] = useState({
		selectedFile : null
	})

	const onFileChange = (e) => {
    
		// Update the state
		setFile({ selectedFile: e.target.files[0] });
	  
	  };

    // On file upload (click the upload button)
    const onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      file.selectedFile,
      file.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(file.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
  
  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
  
    if (file.selectedFile) {
       
      return (
        <div>
          <h2>File Details:</h2>
            <p>File Name: {file.selectedFile.name}</p>
            <p>File Type: {file.selectedFile.type}</p>
            <p>
            Last Modified:{" "}
            {file.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  
    return (
      <>
          <div>
              <input type="file" onChange={onFileChange} />
              <button onClick={onFileUpload}>
                업로드
              </button>
          </div>
        {fileData()}
        </>
    );
  }

