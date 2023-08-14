import { styled } from "styled-components";

const $Input = styled.input`
  height: 56px;
  border-radius: 4px;
  border: 1px solid #c3c3c3;
  width: 100%;
  padding: 18px 20px;
  box-sizing: border-box;
`;

type TInput = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: TInput) => {
  return (
    <$Input
      value={value}
      onChange={(e: any) => {
        onChange(e?.target.value);
      }}
      placeholder={placeholder}
    />
  );
};
