import Label from "../atoms/label";
import Box from "../atoms/box";
import style from "./button.module.css";
import React from "react";
interface ButtonProps {
  label: string;
  className: string;
  onClickHandler: (value: string) => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { label, className, onClickHandler } = props;
  return (
    <span onClick={() => onClickHandler(label)}>
      <Box className={className}>
        <Label label={label}></Label>
      </Box>
    </span>
  );
};

export default Button;
