type SectionHeaderProps = {
  className?: string;
  description?: string;
  showDescription?: boolean;
  showSubtitle?: boolean;
  showTitle?: boolean;
  subtitle?: string;
  title?: string;
};

export default function SectionHeader({
  className = "",
  description = "Description",
  showDescription = true,
  showSubtitle = true,
  showTitle = true,
  subtitle = "Subtitle",
  title = "title",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-stack-md break-keep wrap-break-word text-center ${className}`}
      data-name="SectionHeader"
    >
      {showSubtitle && (
        <p className="w-full typography-body-md font-medium text-action-secondary">
          {subtitle}
        </p>
      )}
      {showTitle && (
        <p className="w-full typography-title-lg tracking-preserved-2 text-guide-text-preserved-1">
          {title}
        </p>
      )}
      {showDescription && (
        <p className="w-full typography-body-md tracking-preserved-1 text-guide-text-preserved-1">
          {description}
        </p>
      )}
    </div>
  );
}
