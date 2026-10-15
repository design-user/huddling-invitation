"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Textarea from "@/components/Textarea";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");

  // 필수값이 하나라도 비어 있으면 발행 버튼을 비활성화한다 (Figma Button 설명)
  const isFilled = [title, dateTime, location, body].every(
    (value) => value.trim() !== "",
  );

  return (
    <div className="mx-auto flex w-full max-w-[375px] flex-col bg-surface-default">
      <NavBar title="초대장 만들기" />

      <main className="flex flex-col gap-section-lg px-page-horizontal pb-[calc(var(--spacing-cover-inset)+var(--spacing-button-lg)+2*var(--spacing-page-horizontal))]">
        <form
          className="flex flex-col gap-stack-lg"
          onSubmit={(event) => event.preventDefault()}
        >
          <Textarea
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            label="제목"
            name="title"
            onChange={(event) =>
              // 제목은 최대 2줄까지만 받는다
              setTitle(event.target.value.split("\n").slice(0, 2).join("\n"))
            }
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            rows="2"
            showHelper
            value={title}
          />
          <Input
            label="일시"
            name="dateTime"
            onChange={(event) => setDateTime(event.target.value)}
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={dateTime}
          />
          <Input
            label="장소"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
            placeholder="예) 세종 남극 기지"
            value={location}
          />
          <Textarea
            label="본문"
            name="body"
            onChange={(event) => setBody(event.target.value)}
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            rows="4"
            value={body}
          />
        </form>

        <section className="flex flex-col gap-inline-md">
          <Label label="미리보기" required={false} />

          {/* 미리보기는 입력한 값을 그대로 보여주는 스크롤 영역 */}
          <div className="h-[516px] overflow-y-auto rounded-control border border-border-subtle">
            <InvitationCover
              className="max-w-none rounded-none"
              date={dateTime}
              location={location}
              title={title}
            />

            <div className="flex flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
              <Image alt="" type="flag" />
              <p className="w-full whitespace-pre-line break-words text-center typography-body-compact tracking-preserved-1 text-guide-text-preserved-1">
                {body}
              </p>
            </div>

            <div className="bg-surface-default px-page-horizontal pb-section-lg pt-stack-lg">
              <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
                <InfoRow label="일시" value={dateTime} />
                <InfoRow label="장소" value={location} />
              </div>
            </div>
          </div>

          <p className="typography-caption-md text-text-tertiary">
            입력하는 내용이 바로 미리보기에 반영돼요.
          </p>
        </section>
      </main>

      {/* 발행하기 버튼은 화면 하단에 고정 (아직 동작 없음) */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-[375px] bg-surface-default p-page-horizontal">
        <Button
          className="w-full"
          disabled={!isFilled}
          label="발행하기"
          size="lg"
        />
      </div>
    </div>
  );
}
