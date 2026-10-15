"use client";

import { useState } from "react";
import Button from "@/components/Button";

type CopyLinkFieldProps = {
  className?: string;
  description?: string;
  title?: string;
  url?: string;
};

export default function CopyLinkField({
  className = "",
  description = "게스트에게 공유하는 링크예요.",
  title = "초대장 링크",
  url = "…/i/k3f9x2a7",
}: CopyLinkFieldProps) {
  const [message, setMessage] = useState("");

  const copyUrl = async () => {
    if (!navigator.clipboard) {
      setMessage("이 브라우저에서는 링크 복사를 지원하지 않아요.");
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setMessage("링크를 복사했어요.");
    } catch {
      setMessage("링크를 복사하지 못했어요. 다시 시도해주세요.");
    }
  };

  return (
    <section
      className={`flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md ${className}`}
      data-name="CopyLinkField"
    >
      <h2 className="typography-label-lg text-text-strong">{title}</h2>
      <div className="flex w-full items-center gap-inline-md">
        <p className="min-w-0 flex-1 truncate rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x typography-body-lg text-guide-text-preserved-1">
          {url}
        </p>
        <Button label="복사" onClick={copyUrl} size="sm" />
      </div>
      <p className="typography-caption-md text-text-tertiary">{description}</p>
      <p aria-live="polite" className="typography-caption-md text-text-tertiary">
        {message}
      </p>
    </section>
  );
}
