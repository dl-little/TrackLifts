import styled from "styled-components";

export const Heading = styled.h1``;

export const FormGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: unset;

  &:not(:first-child) {
    margin-block-start: unset;
  }
`;

export const AppInput = styled.input`
  padding: unset;
`;

export const AppLabel = styled.label`
  font-size: 1rem;
`;

export const AppButton = styled.button`
  padding: unset;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-weight: unset;
  line-height: 1em;
`;

export const Spacer = styled.span<{ $height?: number }>`
  display: block;
  height: ${(props) => props.$height || 1}em;
`;
