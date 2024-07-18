import styled from "styled-components";

export const Column = styled.div<{
  $justify?:
    | "flex-end"
    | "center"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  $align?: "flex-start" | "center" | "flex-end";
  $wrap?: "wrap" | "nowrap";
  $height?: number;
  $width?: number;
  $disabled?: boolean;
  $gap?: number;
}>`
  display: flex;
  flex-flow: column ${(props) => props.$wrap || "nowrap"};
  justify-content: ${(props) => props.$justify || "center"};
  align-items: ${(props) => props.$align || "center"};
  height: ${(props) => props.$height || 100}%;
  width: ${(props) => (props.$width ? props.$width + "%" : "unset")};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
  gap: ${(props) => (props.$gap ? props.$gap + "em" : ".9em")};
  box-sizing: border-box;
`;

export const Row = styled.div<{
  $justify?:
    | "flex-end"
    | "center"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  $align?: "flex-start" | "center" | "flex-end";
  $wrap?: "wrap" | "nowrap";
  $height?: number;
  $width?: number;
  $disabled?: boolean;
  $gap?: number;
}>`
  display: flex;
  flex-flow: row ${(props) => props.$wrap || "nowrap"};
  justify-content: ${(props) => props.$justify || "center"};
  align-items: ${(props) => props.$align || "center"};
  height: ${(props) => (props.$height ? props.$height + "%" : "unset")};
  width: ${(props) => props.$width || 100}%;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
  gap: ${(props) => (props.$gap ? props.$gap + "em" : ".9em")};
  box-sizing: border-box;
`;
