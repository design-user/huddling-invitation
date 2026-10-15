import { notFound } from "next/navigation";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";
import RSVPCard from "@/components/RSVPCard";
import { formatDateTime } from "@/lib/format";
import { mockInvitation } from "@/lib/mock";

// 지금은 가짜 데이터(demo) 1개만 미리 만든다
export async function generateStaticParams() {
  return [{ id: mockInvitation.id }];
}

export default async function InvitationPage({
  params,
}: PageProps<"/i/[id]">) {
  const { id } = await params;
  // Supabase 연결 전까지는 mock 데이터만 보여준다
  if (id !== mockInvitation.id) notFound();

  const invitation = mockInvitation;
  const dateTime = formatDateTime(invitation.dateTime);

  return (
    <div className="mx-auto flex w-full max-w-mobile flex-col bg-surface-default">
      <InvitationCover
        className="max-w-none rounded-none"
        date={dateTime}
        location={invitation.location}
        subtitle="Huddling Club Networking"
        title={invitation.title}
      />

      <div className="flex flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
        <Image alt="" type="flag" />
        <p className="w-full whitespace-pre-line break-keep wrap-break-word text-center typography-body-compact tracking-preserved-1 text-guide-text-preserved-1">
          {invitation.body}
        </p>
      </div>

      <div className="px-page-horizontal pb-section-lg pt-stack-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={dateTime} />
          <InfoRow label="장소" value={invitation.location} />
        </div>
      </div>

      <div className="bg-background-subtle px-page-horizontal pb-section-xl pt-section-lg">
        <RSVPCard companionCount={0} />
      </div>
    </div>
  );
}
