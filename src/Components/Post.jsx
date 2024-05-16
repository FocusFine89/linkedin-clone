import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../redux/actions/getPost";
import { useEffect } from "react";

const Post = () => {
  const post = useSelector((state) => state.getPost.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  return (
    <>
      {post.length > 0 &&
        post.map((singlePost) => {
          return (
            <Col md={5}>
              <div className="d-flex justify-content-between">
                <div className="d-flex ">
                  <div>
                    <img
                      className="avatarStyle rounded-circle "
                      src={singlePost.user.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>{singlePost.username}</h5>
                    <p>{singlePost.user.title}</p>
                  </div>
                </div>
                <h4 className="text-primary">
                  <i className="bi bi-plus-lg"></i> SEGUI
                </h4>
              </div>
              <p>{singlePost.text}</p>
              <img
                className="w-100"
                src="https://www.thewowstyle.com/wp-content/uploads/2015/02/beautiful_mountain-wide.jpg"
                alt=""
              />
              <hr className="mt-4" />
              <div className="d-flex justify-content-evenly">
                <div>
                  <h5>
                    <i className="bi bi-hand-thumbs-up"></i> Consiglia{" "}
                  </h5>
                </div>
                <div>
                  <h5>
                    <i className="bi bi-chat-dots"></i> Commenta{" "}
                  </h5>
                </div>
                <div>
                  <h5>
                    <i className="bi bi-share"></i> Diffondi il post
                  </h5>
                </div>
                <div>
                  <h5>
                    <i className="bi bi-send"></i> Invia
                  </h5>
                </div>
              </div>
            </Col>
          );
        })}
    </>
  );
};

export default Post;
