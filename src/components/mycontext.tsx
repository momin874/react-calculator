import React, { useState, createContext, useContext } from "react";

interface ContextType {
  text: string;
  updateText: (label: string) => void;
  resetText: () => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
}

const MyContext = createContext<ContextType | undefined>(undefined);
interface ContextProps {
  label: string;
  children: React.ReactNode;
}
export const ContextProvider: React.FC<ContextProps> = (props) => {
  const { label, children } = props;
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const updateText = (newLabel: string) => {
    setText((label) => label + newLabel);
  };
  const resetText = () => {
    setText("");
  };

  return (
    <MyContext.Provider
      value={{ text, updateText, resetText, errorMessage, setErrorMessage }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): ContextType => {
  const context = useContext(MyContext);
  if (!context)
    throw new Error("useMyContext must be used within a ContextProvider");
  return context;
};
