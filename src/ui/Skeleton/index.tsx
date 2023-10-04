import {
  SkeletonBase,
  SkeletonWrapperBase,
  SkeletonWrappedChildren,
} from "./style";
import { Common } from "../../types";

interface SkeletonProps {
  stack?: number;
  width?: number;
  rounded: boolean;
}

interface SkeletonWrapperProps extends Common.Children {
  width?: number;
  rounded: boolean;
}

export const Skeleton = ({ stack = 1, width, rounded }: SkeletonProps) => {
  const skeletons: number[] = Array.from({ length: stack })
    .fill(0)
    .map((_, idx: number) => idx);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {skeletons.map((key: number) => (
        <div key={key}>
          <SkeletonBase $width={width} $rounded={rounded}>
            &nbsp;
          </SkeletonBase>
        </div>
      ))}
    </div>
  );
};

Skeleton.Wrapper = function ({
  width,
  rounded,
  children,
}: SkeletonWrapperProps) {
  return (
    <SkeletonWrapperBase $width={width} $rounded={rounded}>
      <SkeletonWrappedChildren>{children}</SkeletonWrappedChildren>
    </SkeletonWrapperBase>
  );
};
