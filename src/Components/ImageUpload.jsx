import React, { useState, useRef } from "react";

const ImageUpload = ({ userId, expId, postId, type, onImageUpload }) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedFileName(file.name);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("Nessun file selezionato");
      return;
    }

    console.log(selectedFile);

    const formData = new FormData();
    formData.append(type === "post" ? "post" : "profile", selectedFile);

    for (const pair of formData.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }

    console.log(formData.values());

    try {
      const response = await fetch(
        type === "post"
          ? `https://striveschool-api.herokuapp.com/api/posts/${postId}`
          : type === "experience"
          ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`
          : `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Immagine caricata con successo");
        const responseData = await response.json();

        const imageUrl = responseData.url;
        onImageUpload(imageUrl);
        setSelectedFileName("");
      } else {
        console.error(
          "Errore durante il caricamento dell'immagine:",
          response.status
        );
      }
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/jpeg"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="btn btn-dark me-2 mt-4"
      >
        <i className="bi bi-camera"></i> Aggiungi foto
      </button>
      {selectedFileName && <span>{selectedFileName}</span>}
      <button onClick={handleUpload} className="btn btn-dark me-2 mt-4">
        Carica immagine {type === "post" ? "del post" : "del profilo"}
      </button>
    </div>
  );
};

export default ImageUpload;
