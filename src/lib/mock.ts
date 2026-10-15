export type RSVPStatus = "yes" | "no";

export type MockInvitation = {
  id: string;
  title: string;
  dateTime: string;
  location: string;
  body: string;
};

export type MockRSVP = {
  id: string;
  invitationId: MockInvitation["id"];
  name: string;
  status: RSVPStatus;
  // 본인을 뺀 동반 인원. 참석 인원 합계 = 참석자 수 + 동반 인원 합
  companionCount: number;
  // 응답한 시각 (ISO 형식, 한국 시간)
  createdAt: string;
};

export const mockInvitation = {
  id: "demo",
  title: "허들링 클럽 네트워킹",
  dateTime: "2026-12-19T18:00:00+09:00",
  location: "Zoom Meeting",
  body:
    "생성형 AI로 디자인하다가 \"멈칫\"한 순간, 있으셨나요?\n\n허들링 클럽 네트워킹은 그 순간을 나누는 모임이에요.\n잘 된 결과물보다 막히고 헤맸던 과정을 이야기해요.\n\n디자이너라면 누구나 환영해요.\n정답을 몰라도, 실패한 경험이어도 괜찮아요.\n누군가의 시행착오가 다른 누군가에게는 기회가 되니까요.\n\n편하게, 솔직하게 이야기 나눠요.",
} satisfies MockInvitation;

export const mockResponses = [
  {
    id: "mock-response-1",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companionCount: 2,
    createdAt: "2026-10-12T14:03:00+09:00",
  },
  {
    id: "mock-response-2",
    invitationId: mockInvitation.id,
    name: "이예빈",
    status: "no",
    companionCount: 0,
    createdAt: "2026-10-12T15:20:00+09:00",
  },
  {
    id: "mock-response-3",
    invitationId: mockInvitation.id,
    name: "박모임",
    status: "yes",
    companionCount: 0,
    createdAt: "2026-10-13T09:41:00+09:00",
  },
] satisfies MockRSVP[];
