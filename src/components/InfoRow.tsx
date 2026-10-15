type InfoRowProps = {
  className?: string;
  label?: string;
  type?: "inline" | "spread";
  value?: string;
};

export default function InfoRow({
  className = "",
  label = "일시",
  type = "inline",
  value = "2026년 11월 14일 (토) 09:00",
}: InfoRowProps) {
  if (type === "spread") {
    return (
      <div
        className={`flex w-full items-center gap-control-compact ${className}`}
        data-name="InfoRow"
      >
        <span className="typography-body-md shrink-0 text-text-secondary">
          {label}
        </span>
        <span className="typography-label-md min-w-0 flex-1 text-right text-text-strong">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-control-compact ${className}`}
      data-name="InfoRow"
    >
      <span className="typography-label-lg shrink-0 text-text-secondary">
        {label}
      </span>
      <span aria-hidden="true" className="h-guide-row w-px bg-border-default" />
      <span className="typography-label-lg text-text-strong">{value}</span>
    </div>
  );
}
