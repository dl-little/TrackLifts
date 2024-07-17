import styled from "styled-components";
import variables from '../scss/abstracts/_shared.module.scss';
const { gap } = variables;

export const Column = styled.div<{
  $justify?: 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch',
  $align?: 'flex-start' | 'center' | 'flex-end',
  $wrap?: 'wrap' | 'nowrap',
  $height?: number,
  $disabled?: boolean,
  $gap?: number
}>`
  display: flex;
  flex-flow: column ${props => props.$wrap || 'nowrap'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'center'};
  height: ${props => props.$height || 100}%;
  opacity: ${props => props.$disabled ? 0.7 : 1};
  gap: ${props => props.$gap ? props.$gap + 'em' : gap};
`;

export const Row = styled.div<{
  $justify?: 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch',
  $align?: 'flex-start' | 'center' | 'flex-end',
  $wrap?: 'wrap' | 'nowrap',
  $width?: number,
  $disabled?: boolean,
  $gap?: number
}>`
  display: flex;
  flex-flow: row ${props => props.$wrap || 'nowrap'};
  justify-content: ${props => props.$justify || 'center'};
  align-items: ${props => props.$align || 'center'};
  width: ${props => props.$width || 100}%;
  opacity: ${props => props.$disabled ? 0.7 : 1};
  gap: ${props => props.$gap ? props.$gap + 'em' : gap};
`;
