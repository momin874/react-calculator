import React, { useState } from "react";
import style from "./label.module.css";
interface LabelProps {
  label: string;
}
const Lablel: React.FC<LabelProps> = (props) => {
  const { label } = props;
  return <p className={style["default-label"]}>{label}</p>;
};

export default Lablel;
