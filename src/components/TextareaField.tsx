import type { TextareaHTMLAttributes } from "react";

export type TextareaFieldState = "default" | "focus" | "active";

type TextareaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className"
> & {
  className?: string;
  state?: TextareaFieldState;
};

export default function TextareaField({
  className = "",
  placeholder = "게스트에게 전할 초대 글을 적어주세요",
  state = "default",
  ...props
}: TextareaFieldProps) {
  const isFocused = state === "focus";

  return (
    <textarea
      {...props}
      aria-label={props["aria-label"] ?? placeholder}
      className={`${className || "min-h-30"} w-full resize-y rounded-control border bg-surface-default px-stack-md py-control-x typography-body-lg tracking-preserved-016 placeholder:text-text-disabled focus:border-action-primary focus:outline-none ${isFocused ? "border-action-primary" : "border-border-subtle"}`}
      data-name="TextareaField"
      placeholder={state === "active" ? undefined : placeholder}
    />
  );
}
