import React from "react";
import styles from "./Input.atom.module.scss";
import clsx from "clsx";

type Props = {
  id: string;
  value: string;
  type?: string;
  placeholder?: string;
  wrapClassName?: string;
  inputClassName?: string;
  onClick?(): void;
};

const InputAtom = ({
  id,
  value,
  type,
  placeholder,
  wrapClassName,
  inputClassName,
  onClick,
}: Props) => {
  return (
    <div className={clsx(styles.wrap, wrapClassName)}>
      <input
        id={id}
        type={type}
        className={clsx(styles.input, inputClassName)}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
      />
    </div>
  );
};

export default InputAtom;
