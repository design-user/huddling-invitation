import Image from "next/image";

type IconCheckProps = {
  className?: string;
};

export default function IconCheck({ className = "" }: IconCheckProps) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      data-name="icon/check"
      height={24}
      src="/icons/check.svg"
      width={24}
    />
  );
}
