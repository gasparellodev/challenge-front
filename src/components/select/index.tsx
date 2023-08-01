"use client";
import { FC, useState } from "react";
import { AjustIcon } from "../svg-components/ajust-icon";
import { Chevron } from "../svg-components/chevron";
import styles from "./select.module.scss";

export const MultipleSelect: FC<{
  options?: any[];
  width?: number;
}> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className={` bg-[#252932]  border-[#7A7F8D] border-solid border-[1px]  flex rounded h-[38px] items-center w-[300px] px-[1rem] py-[8px] justify-between cursor-pointer relative`}
      >
        {isOpen && (
          <div
            style={{ zIndex: "-2px" }}
            className=" flex flex-col px-[12px] absolute border-[#7A7F8D] border-solid border-[1px] bg-[#252932] w-full right-[-1px] h-[300px] top-[35px]"
          >
            {options?.map((option) => {
              return (
                <label className={styles.container}>
                  <input type="checkbox" />
                  {option}
                  <span className={styles.checkmark}></span>
                </label>
              );
            })}
          </div>
        )}

        <AjustIcon color={isOpen ? "#93BC1E" : "currentColor"} />
        <p>Selecione uma opção</p>
        <button onClick={() => setOpen(!isOpen)}>
          <Chevron
            color={isOpen ? "#93BC1E" : "currentColor"}
            direction={isOpen ? "top" : "bottom"}
          />
        </button>
      </div>
    </>
  );
};
