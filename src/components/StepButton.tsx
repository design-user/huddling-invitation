import type { ButtonHTMLAttributes, ReactNode } from "react";
import IconMinus from "@/components/icon/minus";

export type StepButtonState = "default" | "disabled";

type StepButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className"
> & {
  className?: string;
  icon?: ReactNode;
  state?: StepButtonState;
};

export default function StepButton({
  className = "",
  disabled,
  icon,
  state = "default",
  type = "button",
  ...props
}: StepButtonProps) {
  const isDisabled = disabled || state === "disabled";

  return (
    <button
      {...props}
      aria-disabled={isDisabled}
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default disabled:cursor-not-allowed ${className}`}
      disabled={isDisabled}
      type={type}
    >
      {icon ?? <IconMinus className="size-5" disabled={isDisabled} />}
    </button>
  );
}
