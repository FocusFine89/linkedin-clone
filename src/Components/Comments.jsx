import { Image } from "react-bootstrap";

const Comments = () => {
  return (
    <>
      <div className="d-flex">
        <Image
          className="avatarStyle rounded-circle"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt=""
        />

        <input
          className="rounded-4 px-2"
          type="text"
          placeholder="Aggiungi un commento..."
        />
      </div>
      <div className="d-flex">
        <Image
          className="avatarStyle rounded-circle"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt=""
        />
        <div className="bg-body-secondary rounded-2">
          <h6>Andrea rossi</h6>
          <p>Questo è il mio commento!</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
