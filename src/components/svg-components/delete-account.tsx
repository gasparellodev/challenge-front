import { FC } from "react";

export const DeleteAccount: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="30" height="30" rx="6" fill="#F96C6C" />
      <path
        d="M19.0742 10.3242V11.5H10.9258V10.3242H12.9492L13.5508 9.75H16.4492L17.0508 10.3242H19.0742ZM11.5 19.0742V12.0742H18.5V19.0742C18.5 19.3841 18.3815 19.6576 18.1445 19.8945C17.9076 20.1315 17.6341 20.25 17.3242 20.25H12.6758C12.3659 20.25 12.0924 20.1315 11.8555 19.8945C11.6185 19.6576 11.5 19.3841 11.5 19.0742Z"
        fill="white"
      />
    </svg>
  );
};
