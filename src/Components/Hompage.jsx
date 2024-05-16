import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBarHome from "./SideBarHome";
import Post from "./Post";
import AddingPost from "./AddingPost";
import HomeLeftSideBar from "./HomeLeftSidebar";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <HomeLeftSideBar />
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          {/* AddingPost */}
          <AddingPost />
          {/* Post */}
          <Post />
        </Col>
        <Col xs={12} md={3} className="order-md-2">
          {/* SidebarHome */}
          <SideBarHome />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
