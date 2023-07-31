import { FC } from "react";

export const PlaneCursor: FC<{ color?: string; className?: string }> = ({
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.34375 12V7.34375L10.3438 6L0.34375 4.65625V0L14.3438 6L0.34375 12Z"
        fill={color}
      />
    </svg>
  );
};
