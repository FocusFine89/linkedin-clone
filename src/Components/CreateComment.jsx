import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateCommentAction } from "../redux/actions/createCommentAction";

const CreateComment = (props) => {
  const [rate, setRate] = useState("5");
  const [comment, setComment] = useState("");
  const [postID, setPostID] = useState("");
  const dispatch = useDispatch();

  const createCommentPost = () => {
    // setPostID(singlePost._id)
    const objPost = {
      comment: comment,
      rate: rate,
      elementId: postID,
    };
    dispatch(CreateCommentAction());
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Aggiungi Commento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder="scrivi un commento" />
        <Button type="button" className="btn-primary"></Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateComment;
