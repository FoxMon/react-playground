import styled, { keyframes } from "styled-components";

interface SkeletonBaseProps {
  $width?: number;
  $rounded: boolean;
}

const skeletonGradient = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

export const SkeletonBase = styled.div<SkeletonBaseProps>`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.skeletonGray};
  height: 100%;
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  position: relative;
  z-index: 1;
  border-radius: ${(props) => (props.$rounded ? "8px" : "none")};
  animation: ${skeletonGradient} 1.5s infinite ease-in-out;
`;

export const SkeletonWrapperBase = styled(SkeletonBase)`
  width: auto;
  position: absoulte;
`;

export const SkeletonWrappedChildren = styled.div`
  position: relative;
  zindex: -100;
  visibility: hidden;
`;