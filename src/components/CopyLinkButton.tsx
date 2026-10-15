"use client";

import { useState } from "react";
import Button from "@/components/Button";

type CopyLinkButtonProps = {
  className?: string;
  label?: string;
  // 복사할 경로 (예: "/i/demo"). 앞에 현재 사이트 주소를 붙여서 복사한다
  path: string;
};

export default function CopyLinkButton({
  className = "",
  label = "초대장 링크 복사하기",
  path,
}: CopyLinkButtonProps) {
  const [message, setMessage] = useState("");

  const copyLink = async () => {
    if (!navigator.clipboard) {
      setMessage("이 브라우저에서는 링크 복사를 지원하지 않아요.");
      return;
    }

    try {
      await navigator.clipboard.writeText(`${window.location.origin}${path}`);
      setMessage("링크를 복사했어요.");
    } catch {
      setMessage("링크를 복사하지 못했어요. 다시 시도해주세요.");
    }
  };

  return (
    <div className={`flex w-full flex-col items-center gap-inline-md ${className}`}>
      <Button className="w-full" label={label} onClick={copyLink} size="lg" />
      {/* 메시지가 없을 때는 화면에서 숨겨 빈 간격이 생기지 않게 한다 */}
      <p
        aria-live="polite"
        className={message ? "typography-caption-md text-text-tertiary" : "sr-only"}
      >
        {message}
      </p>
    </div>
  );
}
