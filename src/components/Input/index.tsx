import React, { ChangeEvent, FC } from "react";

const Input: FC<{
  value: string;
  type: "text" | "password";
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  isTouched: boolean;
  isValid: boolean;
  errorMessage: string;
  extra?: React.ReactNode;
}> = ({
  value,
  onChange,
  label,
  placeholder,
  isTouched,
  isValid,
  errorMessage,
  type = "text",
  extra = null,
}) => {
  return (
    <div className="py-3 w-full m-1">
      <label>
        <div className="flex justify-between">
          <p className="m-0 p-0 text-base secondary">{label}</p>
          {extra}
        </div>
        <input
          style={{ borderWidth: 1 }}
          className={`${
            !isTouched || !errorMessage
              ? "border-gray-400 focus:border-blue-400"
              : "border-red-400"
          } rounded-sm w-full max-h-12 p-1 border-solid focus:outline-none`}
          {...{
            value,
            type,
            placeholder,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              onChange(event.target.value),
          }}
        />
      </label>
      {errorMessage && (
        <span className="text-red-500 text-xs"> {errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
