import IconCheck from "@/components/icon/check";

type SuccessIconProps = {
  className?: string;
};

export default function SuccessIcon({ className = "" }: SuccessIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-16 items-center justify-center rounded-pill bg-info-subtle ${className}`}
      data-name="SuccessIcon"
    >
      <IconCheck className="size-8" />
    </span>
  );
}
