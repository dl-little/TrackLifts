import styled from 'styled-components';

export const Heading = styled.h1``;

export const FormGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 0.45em;

  &:not(:first-child) {
    margin-block-start: 0.9em;
  }
`;

export const AppInput = styled.input`
  padding: 0.45em;
  color: black;
`;

export const AppLabel = styled.label`
  font-size: 1rem;
`;

export const AppButton = styled.button`
  padding: 0.45em 0.9em;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-weight: bold;
  line-height: 1em;
  color: red;
`;

export const Spacer = styled.span<{ $height?: number }>`
  display: block;
  height: ${(props) => props.$height || 1}em;
`;
