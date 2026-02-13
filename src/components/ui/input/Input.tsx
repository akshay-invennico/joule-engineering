"use client";

import React, {
  forwardRef,
  ChangeEvent,
  InputHTMLAttributes,
} from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  label?: string;
  value?: string;
  isRequired?: boolean;
  className?: string;
  onChange?: (_value: string, _fieldName?: string) => void;
  validation?: {
    required?: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      value,
      type = "text",
      placeholder = "",
      isRequired = false,
      onChange,
      className,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value, name);
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-[#67696B]"
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            className={`w-full px-3 py-2 rounded-md outline-none transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary ${className}`}
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
