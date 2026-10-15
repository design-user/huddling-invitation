import type { InputHTMLAttributes } from "react";
import Radio, { type RadioState } from "@/components/Radio";

type RadioOptionProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
> & {
  className?: string;
  label?: string;
  required?: boolean;
  state?: RadioState;
};

export default function RadioOption({
  className = "",
  label = "Label",
  required = true,
  state = "default",
  ...props
}: RadioOptionProps) {
  // checked가 넘어오면 그 값으로 선택 표시를 정한다
  const visualState =
    props.checked === undefined ? state : props.checked ? "selected" : state;

  return (
    <label
      className={`flex cursor-pointer items-center gap-none rounded-control has-focus-visible:outline-2 has-focus-visible:outline-action-primary ${className}`}
      data-name="RadioOption"
    >
      <input {...props} className="sr-only" type="radio" />
      <Radio state={visualState} />
      <span className="inline-flex items-center gap-inline-sm typography-label-lg tracking-preserved-016">
        <span className="text-text-strong">{label}</span>
        {required && (
          <span className="typography-caption-md text-guide-text-preserved-6">
            필수
          </span>
        )}
      </span>
    </label>
  );
}
