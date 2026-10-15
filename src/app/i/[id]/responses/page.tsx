import { notFound } from "next/navigation";
import CopyLinkButton from "@/components/CopyLinkButton";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRow from "@/components/ResponseRow/true";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { formatDateTime, formatShortDateTime } from "@/lib/format";
import { mockInvitation, mockResponses } from "@/lib/mock";

// 지금은 가짜 데이터(demo) 1개만 미리 만든다
export async function generateStaticParams() {
  return [{ id: mockInvitation.id }];
}

export default async function ResponsesPage({
  params,
}: PageProps<"/i/[id]/responses">) {
  const { id } = await params;
  // Supabase 연결 전까지는 mock 데이터만 보여준다
  if (id !== mockInvitation.id) notFound();

  const invitation = mockInvitation;
  const responses = mockResponses.filter(
    (response) => response.invitationId === invitation.id,
  );

  const attending = responses.filter((response) => response.status === "yes");
  const notAttendingCount = responses.length - attending.length;
  // 참석 인원 합계 = 참석한 사람 + 참석한 사람의 동반 인원
  const totalPeople = attending.reduce(
    (sum, response) => sum + 1 + response.companionCount,
    0,
  );

  return (
    <div className="mx-auto flex w-full max-w-mobile flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />

      <main className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <SectionHeader
          description={`${formatDateTime(invitation.dateTime)} · ${invitation.location}`}
          subtitle="Responses"
          title={invitation.title}
        />

        <div className="flex gap-inline-md">
          <StatCard className="min-w-0 flex-1" label="참석" value={`${attending.length}명`} />
          <StatCard className="min-w-0 flex-1" label="불참" value={`${notAttendingCount}명`} />
          <StatCard className="min-w-0 flex-1" highlight label="참석 인원 합계" value={`${totalPeople}명`} />
        </div>

        <p className="typography-caption-md text-text-tertiary">
          참석 인원 합계 = 참석한 사람 + 동반 인원
        </p>

        <section className="flex flex-col gap-inline-md">
          <h2 className="typography-heading-md text-text-strong">응답 목록</h2>
          {responses.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="flex flex-col gap-inline-md">
              {responses.map((response) => {
                const time = formatShortDateTime(response.createdAt);
                // 불참이면 동반 인원을 적지 않는다 (Figma ResponseRow 설명)
                const meta =
                  response.status === "yes"
                    ? `동반 ${response.companionCount}명 · ${time}`
                    : time;

                return (
                  <li key={response.id}>
                    <ResponseRow
                      meta={meta}
                      name={response.name}
                      status={response.status}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <CopyLinkButton path={`/i/${invitation.id}`} />
      </main>
    </div>
  );
}
