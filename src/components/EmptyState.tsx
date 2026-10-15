type EmptyStateProps = {
  className?: string;
  description?: string;
  title?: string;
};

export default function EmptyState({
  className = "",
  description = "초대장 링크를 공유하면 응답이 여기에 쌓여요.",
  title = "아직 응답이 없어요",
}: EmptyStateProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-inline-md rounded-card bg-surface-subtle px-page-horizontal py-section-lg text-center ${className}`}
      data-name="EmptyState"
    >
      <p className="typography-heading-md text-text-strong">{title}</p>
      <p className="typography-body-md text-text-tertiary">{description}</p>
    </div>
  );
}
