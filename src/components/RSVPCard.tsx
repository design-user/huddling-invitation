"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

export type RSVPCardState = "form" | "done";

type RSVPStatus = "yes" | "no";

// 이름 최대 글자 수 (너무 긴 이름 막기)
const NAME_MAX_LENGTH = 20;

type RSVPCardProps = {
  className?: string;
  companionCount?: number;
  name?: string;
  state?: RSVPCardState;
  status?: boolean | RSVPStatus;
};

export default function RSVPCard({
  className = "",
  companionCount = 1,
  name = "",
  state = "form",
  status = "yes",
}: RSVPCardProps) {
  // props는 처음 값으로만 쓰고, 이후에는 카드 안에서 값을 관리한다
  const [cardState, setCardState] = useState<RSVPCardState>(state);
  const [guestName, setGuestName] = useState(name);
  const [attendance, setAttendance] = useState<RSVPStatus>(
    status === true || status === "yes" ? "yes" : "no",
  );
  const [companions, setCompanions] = useState(companionCount);

  const attending = attendance === "yes";
  const trimmedName = guestName.trim();
  const canSubmit =
    trimmedName !== "" && trimmedName.length <= NAME_MAX_LENGTH;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    // 아직 저장하지 않는다. Supabase 연결 후 서버에서 다시 검사하고 저장한다.
    setGuestName(trimmedName);
    setCardState("done");
  }

  return (
    <section
      className={`flex w-full max-w-sm flex-col items-start gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg ${className}`}
      data-name="RSVPCard"
    >
      {cardState === "form" ? (
        <form className="contents" onSubmit={handleSubmit}>
          <header className="flex w-full flex-col items-center gap-inline-compact text-center">
            <h2 className="typography-heading-lg text-text-strong">
              참석 여부 알려주기
            </h2>
            <p className="typography-body-md text-text-secondary">
              이름과 참석 여부를 남겨주세요.
            </p>
          </header>

          <div className="flex w-full flex-col gap-stack-lg">
            <Input
              autoComplete="name"
              id="rsvp-name"
              label="이름"
              maxLength={NAME_MAX_LENGTH}
              onChange={(event) => setGuestName(event.target.value)}
              placeholder="이름을 입력해주세요"
              value={guestName}
            />

            <fieldset className="flex w-full flex-col gap-inline-md">
              <legend className="mb-inline-md">
                <Label label="참석 여부" />
              </legend>
              <div className="grid w-full grid-cols-2">
                <RadioOption
                  checked={attending}
                  label="참석"
                  name="attendance"
                  onChange={() => setAttendance("yes")}
                  required={false}
                  value="yes"
                />
                <RadioOption
                  checked={!attending}
                  label="불참"
                  name="attendance"
                  onChange={() => {
                    // 불참이면 동반 인원은 0명으로 맞춘다
                    setAttendance("no");
                    setCompanions(0);
                  }}
                  required={false}
                  value="no"
                />
              </div>
            </fieldset>

            <div className="flex w-full flex-col items-start gap-inline-md">
              <Label label="동반 인원" />
              <Stepper
                disabled={!attending}
                onChange={setCompanions}
                value={companions}
              />
              <p className="typography-caption-md text-text-tertiary">
                본인을 제외하고 함께 오는 인원이에요.
              </p>
            </div>
          </div>

          <Button
            className="w-full"
            disabled={!canSubmit}
            label="참석 여부 보내기"
            size="lg"
            type="submit"
          />
        </form>
      ) : (
        <>
          <div
            aria-live="polite"
            className="flex w-full flex-col items-center gap-stack-sm px-none py-section-lg text-center"
          >
            <SuccessIcon />
            <h2 className="typography-title-lg text-text-strong">
              참석 여부를 보냈어요
            </h2>
            <p className="typography-body-md text-text-secondary">
              호스트에게 응답이 전달됐어요.
            </p>
          </div>
          <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
            <InfoRow label="이름" type="spread" value={guestName} />
            <InfoRow
              label="참석 여부"
              type="spread"
              value={attending ? "참석" : "불참"}
            />
            <InfoRow
              label="동반 인원"
              type="spread"
              value={attending ? `${companions}명` : "0명"}
            />
          </div>
        </>
      )}
    </section>
  );
}
