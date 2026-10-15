import type { InputHTMLAttributes } from "react";

export type InputFieldState = "default" | "focus" | "active";

type InputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  className?: string;
  state?: InputFieldState;
};

export default function InputField({
  className = "",
  placeholder = "placeholder",
  state = "default",
  ...props
}: InputFieldProps) {
  const isFocused = state === "focus";

  return (
    <input
      {...props}
      aria-label={props["aria-label"] ?? placeholder}
      className={`h-button-md w-full rounded-control border bg-surface-default px-stack-md typography-body-lg tracking-preserved-016 placeholder:text-text-disabled focus:border-action-primary focus:outline-none ${isFocused ? "border-action-primary" : "border-border-subtle"} ${className}`}
      data-name="InputField"
      placeholder={placeholder}
    />
  );
}
