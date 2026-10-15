type StatCardProps = {
  className?: string;
  highlight?: boolean;
  label?: string;
  value?: string;
};

export default function StatCard({
  className = "",
  highlight = false,
  label = "참석",
  value = "2명",
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md ${highlight ? "bg-info-subtle" : "bg-surface-subtle"} ${className}`}
      data-name="StatCard"
    >
      <p className="typography-caption-md text-text-secondary">{label}</p>
      <p
        className={`typography-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}
      >
        {value}
      </p>
    </div>
  );
}
