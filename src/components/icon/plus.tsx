type IconPlusProps = {
  className?: string;
  disabled?: boolean;
};

// 색은 토큰으로 정한다. 비활성이면 icon/minus 비활성과 같은 text-disabled 색
export default function IconPlus({
  className = "",
  disabled = false,
}: IconPlusProps) {
  return (
    <svg
      aria-hidden="true"
      className={`${disabled ? "text-text-disabled" : "text-text-primary"} ${className}`}
      data-name="icon/plus"
      fill="none"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17V9M9 9V1M9 9H17M9 9H1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
