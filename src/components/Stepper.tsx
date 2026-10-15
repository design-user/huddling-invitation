"use client";

import { useState } from "react";
import StepButton from "@/components/StepButton";
import IconPlus from "@/components/icon/plus";

type StepperProps = {
  className?: string;
  disabled?: boolean;
  onChange?: (value: number) => void;
  value?: number;
};

export default function Stepper({
  className = "",
  disabled = false,
  onChange,
  value,
}: StepperProps) {
  const [internalValue, setInternalValue] = useState(value ?? 1);
  const count = onChange ? value ?? internalValue : internalValue;
  const update = (nextValue: number) => {
    if (onChange) {
      onChange(nextValue);
    } else {
      setInternalValue(nextValue);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-stack-sm ${className}`}
      data-name="Stepper"
    >
      <StepButton
        aria-label="동반 인원 줄이기"
        disabled={disabled || count === 0}
        onClick={() => update(Math.max(0, count - 1))}
      />
      <span className="typography-heading-md text-text-strong">{count}명</span>
      <StepButton
        aria-label="동반 인원 늘리기"
        disabled={disabled}
        icon={<IconPlus className="size-5" disabled={disabled} />}
        onClick={() => update(count + 1)}
      />
    </div>
  );
}
