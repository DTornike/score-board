import { Input as AntInput, InputProps } from "antd";
import { styled } from "styled-components";

const $Input = styled(AntInput)`
  height: 50px;
`;

type TInput = InputProps;

export const Input = (props: TInput) => {
  return <$Input {...props} />;
};
