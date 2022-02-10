import React from "react";
import styled from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export default MainLayout;
