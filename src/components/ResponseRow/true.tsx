import AttendanceBadge from "@/components/AttendanceBadge";

type ResponseRowTrueProps = {
  className?: string;
  meta?: string;
  name?: string;
  status?: boolean | "yes" | "no";
};

export default function ResponseRowTrue({
  className = "",
  meta = "010-****-1234 · 굿즈 M",
  name = "김허들",
  status = "yes",
}: ResponseRowTrueProps) {
  return (
    <div
      className={`flex min-h-19 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md ${className}`}
      data-name="ResponseRow/true"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-inline-sm">
        <p className="truncate typography-label-lg text-guide-text-preserved-1">
          {name}
        </p>
        <p className="truncate typography-caption-md text-text-tertiary">
          {meta}
        </p>
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}

ResponseRowTrue.displayName = "ResponseRow/true";
