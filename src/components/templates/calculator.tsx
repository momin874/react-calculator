import DisplayArea from "./../organisms/display_area";
import InputArea from "./../organisms/input_area";
import ErrorModal from "../molecules/error_modal";
import style from "./calculator.module.css";
import { ContextProvider } from "../mycontext";
const Calculator = () => {
  return (
    <>
      <ContextProvider label="">
        <ErrorModal></ErrorModal>
        <div className={style["calculator"]}>
          <DisplayArea></DisplayArea>
          <InputArea></InputArea>
        </div>
      </ContextProvider>
    </>
  );
};
export default Calculator;
