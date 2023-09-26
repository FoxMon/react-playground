import styled from "styled-components";

interface ButtonBaseProps {
  $fontWeight: string;
  $outlined: "outlined" | "contained";
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  color: ${(props) =>
    props.$outlined === "outlined"
      ? props.theme.colors.black700
      : props.theme.colors.white700};

  background-color: ${(props) =>
    props.$outlined === "outlined"
      ? props.theme.colors.white700
      : props.theme.colors.black700};

  font-weight: ${(props) =>
    props.theme.fontWeight[props.$fontWeight]
      ? props.theme.fontWeight[props.$fontWeight]
      : props.theme.fontWeight.fw400};

  border: ${(props) =>
    props.$outlined === "outlined"
      ? `1px solid ${props.theme.colors.black700}`
      : "none"};

  border-radius: 8px;
  padding: 13px 23px;
`;
