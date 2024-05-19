import React, { useState, useEffect } from "react";
import { Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../redux/actions/getPost";
import Comments from "./Comments";

const Post = () => {
  const posts = useSelector((state) => state.getPost.content);
  const loading = useSelector((state) => state.getPost.loading);
  const dispatch = useDispatch();
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  const toggleComments = (postIndex) => {
    setVisibleComments((prevState) => ({
      ...prevState,
      [postIndex]: !prevState[postIndex],
    }));
  };

  return (
    <>
      {loading && (
        <div className="text-center">
          <Spinner
            className="spinner-custom mt-5"
            animation="border"
            role="status"
          ></Spinner>
        </div>
      )}
      {posts.map((singlePost, index) => (
        <Col key={singlePost._id} md={5} className="mb-3 w-100 bg-light">
          <div className="post-wrapper p-4 border rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <img
                  className="avatarStyle rounded-circle me-3"
                  src={singlePost.user.image}
                  alt=""
                />
                <div>
                  <h5>{singlePost.username}</h5>
                  <p>{singlePost.user.title}</p>
                </div>
              </div>
              <h4 className="text-primary fs-5">
                <i className="bi bi-plus-lg"></i> Segui
              </h4>
            </div>
            <p className="ms-5">{singlePost.text}</p>
            <img className="w-100 mb-3" src={singlePost.image} alt="" />
            <div className="d-flex justify-content-evenly">
              <div>
                <h5>
                  <i className="bi bi-hand-thumbs-up"></i> Consiglia
                </h5>
              </div>
              <div>
                <h5 onClick={() => toggleComments(index)}>
                  <i className="bi bi-chat-dots"></i> Commenta
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
            {visibleComments[index] && <Comments />}
          </div>
        </Col>
      ))}
    </>
  );
};

export default Post;
