import { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions/getCommentsAction";

const Comments = () => {
  const arrOfComments = useSelector((state) => state.getComments.content);
  console.log("arrOfComments", arrOfComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsAction());
  }, [dispatch]);
  return (
    <>
      {arrOfComments.length > 0 &&
        arrOfComments.map((singleComment) => {
          return (
            <Card key={singleComment.id} className="d-flex my-2">
              <Card.Body className="bg-body-secondary rounded-2">
                <div className="d-flex align-items-center">
                  <Image
                    className="avatarStyle rounded-circle me-4"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt=""
                  />
                  <Card.Text className="fw-bold">
                    {singleComment.author}
                  </Card.Text>
                </div>

                <Card.Text className="mt-3">{singleComment.comment}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default Comments;
