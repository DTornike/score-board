import { ReactNode } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #99b898;
`;

type TLayout = {
  children?: ReactNode;
};

export const Layout = ({ children }: TLayout) => {
  return <Container>{children}</Container>;
};
