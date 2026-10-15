type IconCheckProps = {
  className?: string;
};

// 색은 글자색(currentColor)을 따른다. 예: className="text-info-strong"
export default function IconCheck({ className = "" }: IconCheckProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      data-name="icon/check"
      fill="none"
      viewBox="0 0 17.0001 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.50006 6.5L6.50006 10.5L15.5001 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}
