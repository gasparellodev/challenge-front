import { FC } from "react";

export const AjustIcon: FC<{ color?: string; className?: string }> = ({
  className,
  color,
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.75 6.25V0.75H13.5977V2.59766H17.25V4.40234H13.5977V6.25H11.75ZM17.25 9.90234H8.09766V8.09766H17.25V9.90234ZM4.40234 6.25H6.25V11.75H4.40234V9.90234H0.75V8.09766H4.40234V6.25ZM9.90234 17.25H8.09766V11.75H9.90234V13.5977H17.25V15.4023H9.90234V17.25ZM0.75 2.59766H9.90234V4.40234H0.75V2.59766ZM0.75 13.5977H6.25V15.4023H0.75V13.5977Z"
        fill={color ?? "currentColor"}
      />
    </svg>
  );
};
