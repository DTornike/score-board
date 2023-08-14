import { ReactNode } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`;

type TLayout = {
  children?: ReactNode;
};

export const Layout = ({ children }: TLayout) => {
  return <Container>{children}</Container>;
};
