export type RadioState = "default" | "selected" | "disabled";

type RadioProps = {
  className?: string;
  state?: RadioState;
};

const outerColors: Record<RadioState, string> = {
  default: "bg-text-tertiary",
  selected: "bg-action-primary",
  disabled: "bg-text-disabled",
};

export default function Radio({
  className = "",
  state = "default",
}: RadioProps) {
  const selected = state === "selected";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-12 shrink-0 items-center justify-center ${className}`}
      data-name="Radio"
    >
      <span
        className={`inline-flex size-5 items-center justify-center overflow-hidden rounded-pill ${outerColors[state]}`}
      >
        <span
          className={`rounded-pill bg-surface-default ${selected ? "size-2" : "size-4"}`}
        />
      </span>
    </span>
  );
}
