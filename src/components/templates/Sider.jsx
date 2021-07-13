import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: inline-block;
  width: 200px;
  min-height: 100vh;
  background-color: #001529;
`;
const LogoWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
const NavContainer = styled.ul``;
const NavWrapper = styled.li`
  padding-left: 24px;
  height: 40px;
  line-height: 40px;
  color: rgba(255, 255, 255, 0.65);
  &:hover {
    color: #fff;
    cursor: pointer;
    background-color: #1890ff;
  }
`;
const Sider = () => {
  return (
    <Container>
      <LogoWrapper>Service Name</LogoWrapper>
      <NavContainer>
        <NavWrapper>
          <Link to="/">Home</Link>
        </NavWrapper>
        <NavWrapper>
          <Link to="/about">About</Link>
        </NavWrapper>
      </NavContainer>
    </Container>
  );
};

export default Sider;
