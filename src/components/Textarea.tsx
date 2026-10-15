import type { TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField, {
  type TextareaFieldState,
} from "@/components/TextareaField";

export type TextareaRows = "2" | "4";

type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className" | "rows"
> & {
  className?: string;
  helper?: string;
  label?: string;
  required?: boolean;
  rows?: TextareaRows;
  showHelper?: boolean;
  state?: TextareaFieldState;
};

export default function Textarea({
  className = "",
  helper = "엔터로 줄을 나눌 수 있어요",
  label = "Label",
  required = true,
  rows = "4",
  showHelper = false,
  state = "default",
  ...props
}: TextareaProps) {
  const id = props.id ?? props.name ?? "textarea";

  return (
    <div className={`flex w-full flex-col items-start gap-inline-compact ${className}`}>
      <Label htmlFor={id} label={label} required={required} />
      <TextareaField
        {...props}
        className={rows === "2" ? "min-h-18" : "min-h-30"}
        id={id}
        rows={Number(rows)}
        state={state}
      />
      {showHelper && (
        <p className="typography-caption-md text-text-tertiary">{helper}</p>
      )}
    </div>
  );
}
