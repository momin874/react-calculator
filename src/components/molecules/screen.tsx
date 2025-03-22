import Box from "./../atoms/box";
import Input from "./../atoms/input";
import React from "react";
import style from "./screen.module.css";
import { useMyContext } from "../mycontext";
const Screen = () => {
  const { text } = useMyContext();
  return (
    <Box className={style["default-screen"]}>
      <Input value={text}></Input>
    </Box>
  );
};
export default Screen;
