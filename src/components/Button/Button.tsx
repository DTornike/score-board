import { ReactNode } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  height: 63px;
  padding: 0 51px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #f9645f;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  border: none;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

type TButton = {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  children?: ReactNode;
};

export const Button = ({ label, onClick, disabled, children }: TButton) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label || children}
    </StyledButton>
  );
};
