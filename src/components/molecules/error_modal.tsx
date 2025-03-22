import React, { useEffect, useState } from "react";
import Lablel from "../atoms/label";
import { useMyContext } from "../mycontext";
import style from "./error_modal.module.css";
const ErrorModal = () => {
  const { errorMessage, setErrorMessage } = useMyContext();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (errorMessage.length) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 1000);
      }, 3000);
    }
  }, [errorMessage]);
  return (
    <span
      className={`${style["default-modal"]} ${
        isVisible ? style["show"] : style["hide"]
      }`}
    >
      <Lablel label={errorMessage}></Lablel>
    </span>
  );
};

export default ErrorModal;
