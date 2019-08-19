import React from "react";
import { tsPropertySignature } from "@babel/types";

const Input = props => {
  const { className, placeholder } = props;
  return <input placeholder={placeholder} className={className} />;
};

export default Input;
