import Label from "@/components/Label";
import Radio, { type RadioState } from "@/components/Radio";

type RadioOptionProps = {
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
}: RadioOptionProps) {
  return (
    <div
      className={`flex items-center gap-none ${className}`}
      data-name="RadioOption"
    >
      <Radio state={state} />
      <Label label={label} required={required} />
    </div>
  );
}
