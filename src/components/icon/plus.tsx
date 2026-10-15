import Image from "next/image";

type IconPlusProps = {
  className?: string;
};

export default function IconPlus({ className = "" }: IconPlusProps) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      data-name="icon/plus"
      height={24}
      src="/icons/plus.svg"
      width={24}
    />
  );
}
