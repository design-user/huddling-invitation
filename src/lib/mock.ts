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
};

export const mockInvitation = {
  id: "mock-invitation",
  title: "허들링 클럽 2번째 오프라인 밋업",
  dateTime: "2026-11-14T09:00:00+09:00",
  location: "서울특별시 성동구 성수이로 00, 허들링 라운지",
  body: "함께 모여 이야기 나누고 즐거운 시간을 보내요. 편한 마음으로 참석해주세요!",
} satisfies MockInvitation;

export const mockResponses = [
  {
    id: "mock-response-1",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companionCount: 2,
  },
  {
    id: "mock-response-2",
    invitationId: mockInvitation.id,
    name: "이예빈",
    status: "no",
    companionCount: 0,
  },
  {
    id: "mock-response-3",
    invitationId: mockInvitation.id,
    name: "박모임",
    status: "yes",
    companionCount: 0,
  },
] satisfies MockRSVP[];
