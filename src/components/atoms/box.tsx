import styles from "./box.module.css";
import React from "react";

interface BoxProps {
  className?: string;
  children: React.ReactNode;
}
const Box: React.FC<BoxProps> = (props) => {
  return (
    <div className={`${styles["default-box"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Box;
