import Image from "next/image";

type IconMinusProps = {
  className?: string;
  disabled?: boolean;
};

export default function IconMinus({
  className = "",
  disabled = false,
}: IconMinusProps) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className={className}
      data-name="icon/minus"
      height={24}
      src={disabled ? "/icons/minus-disabled.svg" : "/icons/minus.svg"}
      width={24}
    />
  );
}
