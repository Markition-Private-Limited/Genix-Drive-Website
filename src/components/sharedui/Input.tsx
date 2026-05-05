import React from "react";
import { ChevronDown } from "lucide-react";

type CommonProps = {
  label?: string;
  className?: string;
  containerClassName?: string;
};

type TextFieldProps = CommonProps & {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  name?: string;
  maxLength?: number;
};

type SelectOption = { value: string; label: string };

type SelectFieldProps = CommonProps & {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  name?: string;
  rightIcon?: React.ReactNode;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      value,
      onChange,
      className = "",
      containerClassName = "",
      leftIcon,
      rightIcon,
      maxLength,
      name,
      ...rest
    },
    ref,
  ) => {
    const leftPad = leftIcon ? "pl-10" : "pl-4";
    const rightPad = rightIcon ? "pr-10" : "pr-4";
    return (
      <div className={containerClassName}>
        {label && <label className="text-sm text-gray-700">{label}</label>}
        <div className="relative mt-2">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            className={`w-full rounded-lg border border-gray-300 ${leftPad} ${rightPad} py-3 outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...rest}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {rightIcon}
            </span>
          )}
        </div>
      </div>
    );
  },
);

export const SelectField = React.forwardRef<
  HTMLSelectElement,
  SelectFieldProps
>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      options,
      className = "",
      containerClassName = "",
      name,
      rightIcon,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={containerClassName}>
        {label && <label className="text-sm text-gray-700">{label}</label>}
        <div className="relative mt-2">
          <select
            ref={ref}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...rest}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {rightIcon ?? <ChevronDown className="w-5 h-5" />}
          </span>
        </div>
      </div>
    );
  },
);
