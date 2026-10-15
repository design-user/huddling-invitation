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
      // SVG가 박스에 맞춰 늘어나지 않도록 원래 비율을 유지한다
      className={`object-contain ${className}`}
      data-name="icon/minus"
      height={24}
      src={disabled ? "/icons/minus-disabled.svg" : "/icons/minus.svg"}
      width={24}
    />
  );
}
