import React, { useEffect, useState } from "react";
import Lablel from "../atoms/label";
import { useMyContext } from "../mycontext";
import style from "./error_modal.module.css";
const ErrorModal = () => {
  const { errorMessage } = useMyContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [isVisible]);
  return (
    <span className={`${style["default-modal"]} ${isVisible ? "show" : ""}`}>
      <Lablel label={errorMessage}></Lablel>
    </span>
  );
};

export default ErrorModal;
