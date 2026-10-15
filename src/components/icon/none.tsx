type IconNoneProps = {
  className?: string;
};

export default function IconNone({ className = "" }: IconNoneProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-6 shrink-0 overflow-hidden ${className}`}
      data-name="icon/none"
    />
  );
}
