import { SpinnerBox, SpinnerBase } from "./style";

export const Spinner = () => {
  return (
    <SpinnerBox>
      <SpinnerBase viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </SpinnerBase>
    </SpinnerBox>
  );
};
