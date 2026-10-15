import Image from "@/components/Image";

type InvitationCoverProps = {
  className?: string;
  date?: string;
  location?: string;
  subtitle?: string;
  title?: string;
};

export default function InvitationCover({
  className = "",
  date = "2026년 11월 14일 (토) 09:00",
  location = "세종 남극 기지",
  subtitle = "Huddling Club 2nd Meetup",
  title = "허들링 클럽 2번째\n오프라인 밋업",
}: InvitationCoverProps) {
  return (
    <section
      className={`flex w-full max-w-sm flex-col items-center justify-center gap-page-horizontal overflow-hidden rounded-cover bg-gradient-to-b from-cover-gradient-preserved-3 to-cover-gradient-preserved-4 p-cover-inset text-text-inverse ${className}`}
      data-name="InvitationCover"
    >
      <div className="flex w-full flex-col items-center gap-stack-md text-center">
        <p className="w-full typography-body-md font-medium opacity-60">
          {subtitle}
        </p>
        <h1 className="w-full whitespace-pre-line typography-title-lg">
          {title}
        </h1>
      </div>
      <Image
        alt=""
        className="size-50"
        type="character"
      />
      <div className="flex w-full min-w-0 flex-col items-center justify-center gap-inline-md text-center">
        <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs typography-caption-md font-semibold text-info-strong">
          일시
        </span>
        <p className="w-full typography-body-md font-medium">{date}</p>
      </div>
      <div className="flex w-full min-w-0 flex-col items-center justify-center gap-inline-md text-center">
        <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs typography-caption-md font-semibold text-info-strong">
          장소
        </span>
        <p className="w-full typography-body-md font-medium">{location}</p>
      </div>
    </section>
  );
}
