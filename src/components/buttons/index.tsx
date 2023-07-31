import { FC, ReactElement } from "react";

export const Button: FC<{
  handleClick?: any;
  width?: string;
  height?: string;
  label: string;
  className?: string;
  icon?: ReactElement;
  iconDirection?: "left" | "right";
  theme?: "primary" | "secundary" | "outline" | "disabled" | "load";
}> = ({
  label,
  handleClick,
  className,
  width,
  height,
  icon,
  iconDirection = "left",
  theme = "primary",
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        disabled={theme === "disabled"}
        style={{ width, height }}
        className={`${className} 
        flex 
        items-center 
        justify-center 
        gap-2 
        rounded 


        ${
          theme === "primary" &&
          `  
            bg-button-primary-default
            hover:bg-button-primary-hover
            active:border
            active:border-white
            active:border-solid
            ease-in duration-200`
        }
        
        ${
          theme === "secundary" &&
          `bg-button-secundary-default 
                text-white
                hover:bg-button-secundary-hover
                hover:text-button-secundary-textContent
                active:border
                active:border-white
                active:border-solid
                active:text-white
              `
        }
        ${
          theme === "outline" &&
          `bg-transparent
               hover:bg-button-primary-default
                 hover:border-none
                 border-white
                 border-solid
                 border
                 text-white
                `
        }
        ${
          theme === "disabled" &&
          `
        bg-button-disabled-background
        text-button-disabled-text
        hover:bg
        `
        }
        `}
      >
        {iconDirection === "left" && icon}
        {label}
        {iconDirection === "right" && icon}
      </button>
    </>
  );
};
