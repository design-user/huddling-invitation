import type { InputHTMLAttributes } from "react";
import InputField, { type InputFieldState } from "@/components/InputField";
import Label from "@/components/Label";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  className?: string;
  helper?: string;
  label?: string;
  required?: boolean;
  showHelper?: boolean;
  state?: InputFieldState;
};

export default function Input({
  className = "",
  helper = "안내 문구",
  label = "Label",
  required = true,
  showHelper = false,
  state = "default",
  ...props
}: InputProps) {
  const id = props.id ?? props.name ?? "input";

  return (
    <div className={`flex w-full flex-col gap-inline-compact ${className}`}>
      <Label htmlFor={id} label={label} required={required} />
      <InputField
        {...props}
        id={id}
        placeholder={props.placeholder ?? "placeholder"}
        state={state}
      />
      {showHelper && (
        <p className="typography-caption-md text-text-tertiary">{helper}</p>
      )}
    </div>
  );
}
