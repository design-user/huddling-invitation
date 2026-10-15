import type { ReactNode } from "react";
import IconNone from "@/components/icon/none";

type NavBarProps = {
  className?: string;
  left?: ReactNode;
  right?: ReactNode;
  title?: string;
};

export default function NavBar({
  className = "",
  left,
  right,
  title = "Label",
}: NavBarProps) {
  return (
    <nav
      className={`flex min-h-16 w-full items-center gap-section px-page-horizontal py-stack-md ${className}`}
      data-name="NavBar"
    >
      {left ?? <IconNone />}
      <p className="min-w-0 flex-1 break-keep text-center typography-heading-md tracking-preserved-1 text-guide-text-preserved-1">
        {title}
      </p>
      {right ?? <IconNone />}
    </nav>
  );
}
