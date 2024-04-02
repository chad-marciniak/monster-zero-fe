import React, { forwardRef, Ref } from "react";
import { Input } from "@mui/base";
import "./index.scss";

type TextInputProps = {
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  width: string;
};


export const TextInput = forwardRef(
  (
    { name, value, label, onChange, error, width }: TextInputProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <Input
      className="text-input"
      name={name}
      type="text"
      width={width}
      value={value}
      error={!!error}
      placeolder={label}
      onChange={onChange}
      ref={ref}
    />
  )
);
