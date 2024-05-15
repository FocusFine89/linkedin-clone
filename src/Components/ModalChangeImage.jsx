import { Button, Image, Modal } from "react-bootstrap";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { useSelector } from "react-redux";

const ModalChangeImage = (props) => {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.userMe.content);

  return (
    <Modal className="modal-dark" size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="title-modal">Foto Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="color-modal d-flex flex-column align-items-center justify-content-center">
        <Image
          src={
            profileImage ||
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
          roundedCircle
          className="profile-img mb-2"
        />

        <Button variant="dark" className="me-2 mt-4">
          <i class="bi bi-eye"></i> Chiunque
        </Button>

        <div className="d-flex flex-row align-items-center">
          <Button variant="dark" className="me-2 mt-4">
            <i class="bi bi-pencil"></i> Modifica
          </Button>
          <ImageUpload
            userId={user._id}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />{" "}
          <Button variant="dark" className="me-2 mt-4 p-1">
            <i class="bi bi-images"></i> Fotogrammi
          </Button>
          <Button variant="dark" className="mt-4 p-1 ms-3">
            <i class="bi bi-trash"></i> Elimina
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalChangeImage;
