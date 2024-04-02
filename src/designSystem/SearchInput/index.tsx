import React from "react";
import { TextInput } from "../TextInput";
type SearchInputProps = {
    placeholder: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
};
export const SearchInput = ({ placeholder, className, onChange }: SearchInputProps) => {
    return (
        <TextInput
        className={`w-full ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        />
    );
};
