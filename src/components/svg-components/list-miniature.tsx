import { FC } from "react";

export const ListMiniature: FC<{
  color?: string;
  className?: string;
}> = ({ className, color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.25 8.91667H8.91667V0.25H0.25V8.91667ZM0.25 19.75H8.91667V11.0833H0.25V19.75ZM11.0833 19.75H19.75V11.0833H11.0833V19.75ZM11.0833 0.25V8.91667H19.75V0.25"
        fill={color}
      />
    </svg>
  );
};
