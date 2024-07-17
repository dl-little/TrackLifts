import styled from "styled-components";
import variables from '../scss/abstracts/_shared.module.scss';
const { quarterGap, halfGap, darkPrimary } = variables;

export const FormGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: ${quarterGap};

  &:not(:first-child) {
    margin-block-start: ${halfGap}
  }
`;

export const AppInput = styled.input`
  padding: ${halfGap};
`;

export const AppLabel = styled.label`
  font-size: 1rem;
`;

export const AppButton = styled.button`
  padding: ${quarterGap} ${halfGap};
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${darkPrimary};
  font-weight: bold;
  line-height: 1em;
`;

export const Spacer = styled.span<{$height?: number}>`
  display: block;
  height: ${props => props.$height || 1}em;
`;