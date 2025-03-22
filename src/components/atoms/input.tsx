import React from "react";
import style from "./input.module.css";
interface inputProps {
  value: string;
}
const Input: React.FC<inputProps> = (props) => {
  const { value } = props;
  return (
    <input defaultValue={value} className={style["default-input-element"]} />
  );
};

export default Input;
