import { useEffect } from "react";
import { Image } from "react-bootstrap";
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
    <div className="mt-3">
      {arrOfComments.length > 0 &&
        arrOfComments.map((singleComment) => {
          return (
            <div key={singleComment.id} className="d-flex ">
              <Image
                className="avatarStyle rounded-circle "
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt=""
              />
              <div className="bg-body-secondary rounded-2 w-100 mb-3 ms-2">
                <div className="ms-2 mt-2">
                <h6>{singleComment.author}</h6>
                <p>{singleComment.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
