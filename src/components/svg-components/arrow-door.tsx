import { FC } from "react";

export const ArrowDoor: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.34375 2.65625L9.65625 6L6.34375 9.34375L5.40625 8.40625L7.125 6.65625H0.34375V5.34375H7.125L5.40625 3.59375L6.34375 2.65625ZM12.3438 10.6562V1.34375H7V0H12.3438C12.6979 0 13 0.135417 13.25 0.40625C13.5208 0.65625 13.6562 0.96875 13.6562 1.34375V10.6562C13.6562 11.0312 13.5208 11.3542 13.25 11.625C13 11.875 12.6979 12 12.3438 12H7V10.6562H12.3438Z"
        fill="white"
      />
    </svg>
  );
};
