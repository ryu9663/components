import React, { useState } from "react";
import styles from "./Input.module.scss";
import { useParentState } from "../../utils/hooks/useParentState";

export type InputValueType = string | number | readonly string[] | undefined;

export interface InputDefaultProps {
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  value?: InputValueType;
  defaultValue?: InputValueType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface InputOptionsProps {
  size?: "small" | "medium";
  focusStyle?: "color" | "border";
  isSolid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isInvalid?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  validation?: {
    checker: (
      e: React.ChangeEvent<HTMLInputElement>,
      otherParams?: any
    ) => string;
    otherParams?: any; //e 말고도 다른 param이 필요할 경우
  };
}

export interface InputProps extends InputDefaultProps, InputOptionsProps {}

const Input = ({
  className,
  isSolid,
  isDisabled,
  isFullWidth = true,
  isFullHeight,
  isInvalid,
  focusStyle = "color",
  leftIcon,
  rightIcon,
  size = "medium",

  value,
  onChange,
  validation,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useParentState(value); //props로 부모컴퍼넌트의 state를 받으면, 부모컴포넌트의 state를 업데이트 아니면 내부 state업데이트
  const [errorMessage, setErrorMessage] = useState("");
  console.log("하이하이", inputValue);
  const mergedClassName: string = [
    leftIcon || rightIcon ? styles.inputGroup : styles.input,
    styles[`size_${size}`],
    focusStyle === "border" && styles.focusBorder,
    isSolid && styles.solid,
    isDisabled && styles.disabled,
    errorMessage && styles.invalid, //내부에서 관리
    isFullWidth && styles.fullWidth,
    isFullHeight && styles.fullHeight,
    className,
  ]
    .filter((className) => !!className)
    .join(" ");

  const stopTypingByValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validation) return;
    const { checker, otherParams } = validation;
    const _validation = checker(e, otherParams);
    console.log(_validation);
    if (_validation) {
      console.log(_validation);
      setErrorMessage(_validation);
      return true;
    } else {
      setErrorMessage("");
      return false;
    }
  };
  return (
    <div className={styles.input_wrapper}>
      {leftIcon || rightIcon ? (
        <div className={mergedClassName}>
          {leftIcon}
          <input disabled={isDisabled} {...rest} />
          {rightIcon}
        </div>
      ) : (
        <input
          className={mergedClassName}
          disabled={isDisabled}
          value={inputValue}
          onChange={(e) => {
            if (stopTypingByValidation(e)) return;
            onChange?.(e);
            setInputValue(e.target.value);
          }}
        />
      )}

      {errorMessage && (
        <span className={styles.error_message}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
