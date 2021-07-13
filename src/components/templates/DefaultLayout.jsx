import React from "react";
import styled from "styled-components";
import Sider from "./Sider";

const Container = styled.div``;
const Body = styled.div`
  display: inline-block;
  width: calc(100% - 200px);
`;

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Sider />
      <Body>{children}</Body>
    </Container>
  );
};

export default DefaultLayout;
