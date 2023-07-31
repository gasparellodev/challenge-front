"use client";
import { ChangeEvent, FC, useState } from "react";
import { OpenEye } from "../svg-components/open-eye";
import { title } from "process";

export const Input: FC<{
  title: string;
  placeHolder?: string;
  className?: string;
  icon?: "eye" | "search" | "chevronDown";
  empty?: boolean;
  disabled?: boolean;
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
}> = ({
  className,
  icon,
  title,
  placeHolder = "Type your text",
  disabled = false,
  handleChange,
}) => {
  const [hasValue, setHasValue] = useState(false);

  return (
    <div
      className={`${className} border-b-2 h-16 ${
        hasValue && "border-primary"
      } ${disabled && "border-button-disabled-background"}`}
    >
      <div className="">
        <p
          className={`
          text-sm
          ${hasValue && "text-primary"}
          ${
            disabled &&
            "text-button-disabled-background  placeholder:text-button-disabled-background"
          }`}
        >
          {title}
        </p>
        <input
          disabled={disabled}
          onChange={(e) => {
            e.currentTarget.value === ""
              ? setHasValue(false)
              : setHasValue(true);
            handleChange(e);
          }}
          className={`w-full bg-transparent border-none outline-none`}
          placeholder={placeHolder}
        />
      </div>
      {icon === "eye" && <OpenEye />}
    </div>
  );
};
