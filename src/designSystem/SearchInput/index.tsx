import React from "react";
import { TextInput } from "../TextInput";
import "./index.scss";
type SearchInputProps = {
    placeholder: string;
    className?: string;
    name: string;
    value: string;
    error: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
};
export const SearchInput = ({ placeholder, className, onChange }: SearchInputProps) => {
    return (
        <TextInput
        className={`${className}`}
        placeholder={placeholder}
        onChange={onChange}
        name="search"
        error={false}
        />
    );
};
