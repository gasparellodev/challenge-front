import { FC } from "react";

export const Chevron: FC<{
  direction?: "bottom" | "top";
  color?: string;
  className?: string;
}> = ({ className, color, direction = "top" }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: `rotate(${direction === "bottom" ? "180" : "0"}deg)`,
      }}
    >
      <path
        d="M6 0.347656L11.5 5.84766L10.2109 7.13672L6 2.92578L1.78906 7.13672L0.5 5.84766L6 0.347656Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
