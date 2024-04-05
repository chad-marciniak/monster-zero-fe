import React, { forwardRef, Ref } from "react";
import { Input } from "@mui/base";
import "./index.scss";

type TextInputProps = {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  className?: string;
  placeholder?: string;
  ref: Ref<HTMLInputElement>;
};


export const TextInput = forwardRef(
  (
    { name, value, onChange, error, className, placeholder }: TextInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Input
      className={`text-input ${className}`}
      name={name}
      type="text"
      value={value}
      error={!!error}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    />
  )
);
