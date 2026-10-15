type AttendanceStatus = boolean | "yes" | "no";

type AttendanceBadgeProps = {
  className?: string;
  status?: AttendanceStatus;
};

export default function AttendanceBadge({
  className = "",
  status = true,
}: AttendanceBadgeProps) {
  const attending = status === true || status === "yes";

  return (
    <span
      className={`inline-flex items-center rounded-pill px-control-compact py-inline-sm typography-label-md ${attending ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary"} ${className}`}
      data-name="AttendanceBadge"
    >
      {attending ? "참석" : "불참"}
    </span>
  );
}
