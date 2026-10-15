type LabelProps = {
  className?: string;
  htmlFor?: string;
  label?: string;
  required?: boolean;
};

export default function Label({
  className = "",
  htmlFor,
  label = "Label",
  required = true,
}: LabelProps) {
  return (
    <label
      className={`inline-flex items-center gap-inline-sm typography-label-lg tracking-preserved-016 ${className}`}
      data-name="Label"
      htmlFor={htmlFor}
    >
      <span className="text-text-strong">{label}</span>
      {required && (
        <span className="typography-caption-md text-guide-text-preserved-6">
          필수
        </span>
      )}
    </label>
  );
}
