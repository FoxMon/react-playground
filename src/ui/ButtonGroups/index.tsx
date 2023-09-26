import { ButtonBase } from "./style";
import { Common } from "../../types";

interface ButtonGroupsProps extends Common.Children {
  className?: string;
}

interface ButtonProps {
  fontWeight: "fw100" | "fw200" | "fw400" | "fw700";
  outlined: "outlined" | "contained";
  label: string;
}

export const ButtonGroups = ({ className, children }: ButtonGroupsProps) => {
  return <div className={className}>{children}</div>;
};

ButtonGroups.Button = function ({ fontWeight, outlined, label }: ButtonProps) {
  return (
    <ButtonBase $fontWeight={fontWeight} $outlined={outlined}>
      <span>{label}</span>
    </ButtonBase>
  );
};
