import Button from "./../molecules/button";
import style from "./inputArea.module.css";
import { useMyContext } from "../mycontext";
const InputArea = () => {
  const buttonValues = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "x",
    ".",
    "0",
    "+",
    "-",
    "[x]",
    "=",
  ];
  const { text, updateText, resetText, setErrorMessage } = useMyContext();
  const removeCharacter = () => {
    const textString = text;
    resetText();
    updateText(textString.slice(0, textString.length - 1));
  };
  const validateMathematicalExpression: (expression: string) => boolean = (
    expression
  ) => {
    const re = /^([-+]?\d+(\.\d+)?[\+\-x\/])*([-+]?\d+(\.\d+)?)+$/
    return re.test(expression);
  };
  const doCalculation = () => {
    const isValidExpression = validateMathematicalExpression(text);
    if (!isValidExpression) {
      setErrorMessage("Invalid Mathematical Expression");
      return null;
    }
    return new Function(`return ${text.replace('x','*')}`)()
  };

  const handleButtonClick = (value: string) => {
    if (value == "C") resetText();
    else if (value == "[x]") removeCharacter();
    else if (value == "=") {
        const result = doCalculation()
        if(result || Number.isNaN(result)){
            resetText()
            updateText(result)
        }
    }
    else updateText(value);
  };
  return (
    <div className={style["default-button-area"]}>
      {buttonValues.map(
        (value) =>
          // {value == '[x]' || value == '='
          value != "[x]" && value != "=" ? (
            <Button
              className={style["numeric-buttons"]}
              label={value}
              onClickHandler={handleButtonClick}
            ></Button>
          ) : (
            <Button
              className={style["special-buttons"]}
              label={value}
              onClickHandler={handleButtonClick}
            ></Button>
          )
        // }
      )}
    </div>
  );
};
export default InputArea;
