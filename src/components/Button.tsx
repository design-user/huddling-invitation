import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonState = "default" | "hover" | "disabled";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label?: ReactNode;
  size?: ButtonSize;
  state?: ButtonState;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "gap-control-compact py-inline-sm typography-label-md",
  md: "gap-inline-compact h-button-md py-control-x typography-label-md",
  lg: "gap-control-compact h-button-lg py-inline-sm typography-label-lg",
};

const stateClasses: Record<ButtonState, Record<ButtonSize, string>> = {
  default: {
    sm: "bg-action-primary text-text-inverse",
    md: "bg-text-secondary text-text-inverse",
    lg: "bg-action-primary text-text-inverse",
  },
  hover: {
    sm: "bg-action-hover-overlay text-text-inverse",
    md: "button-md-hover text-text-inverse",
    lg: "bg-action-hover-overlay text-text-inverse",
  },
  disabled: {
    sm: "bg-border-subtle text-text-inverse",
    md: "bg-border-subtle text-text-inverse",
    lg: "bg-border-subtle text-text-inverse",
  },
};

const hoverClasses: Record<ButtonSize, string> = {
  sm: "enabled:hover:bg-action-hover-overlay",
  md: "enabled:hover:button-md-hover",
  lg: "enabled:hover:bg-action-hover-overlay",
};

export default function Button({
  className,
  disabled = false,
  label = "Button",
  size = "sm",
  state = "default",
  type = "button",
  ...props
}: ButtonProps) {
  const effectiveState = disabled ? "disabled" : state;
  const isDisabled = effectiveState === "disabled";
  const classes = [
    "inline-flex items-center justify-center px-control-y relative rounded-control text-center whitespace-nowrap",
    sizeClasses[size],
    stateClasses[effectiveState][size],
    effectiveState === "default" ? hoverClasses[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      className={classes}
      disabled={isDisabled}
      type={type}
    >
      {label}
    </button>
  );
}
