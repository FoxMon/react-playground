import { Common } from "../../types";

interface ButtonGroupsProps extends Common.Children {
  className?: string;
}

export const ButtonGroups = ({ className, children }: ButtonGroupsProps) => {
  return <div className={className}>{children}</div>;
};
