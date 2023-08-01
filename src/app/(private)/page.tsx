"use client";
import { Button } from "@/components/buttons";
import { CourseCard } from "@/components/class-card";
import { Search } from "@/components/search";
import { MultipleSelect } from "@/components/select";
import { ListIcon } from "@/components/svg-components/list-icon";
import { ListMiniature } from "@/components/svg-components/list-miniature";
import { PlusIcon } from "@/components/svg-components/plus-icon";
import Image from "next/image";
import { use, useState } from "react";

const dataMock = [
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
  {
    course_name: "Javascript",
    course_description: "Lorem ipsum lore",
    course_type: "Link externo",
    course_category: "Produtividade",
    course_link: "http://lorem.com.br",
    link_support: "https://lorem.help.com.br",
    course_image: null,
  },
];

const selectMock = ["Produtividade"];

export default function Home() {
  const [listMiniature, setListMiniature] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [length, setLength] = useState();

  const handleListView = () => {
    setListMiniature(!listMiniature);
  };

  type IPagination = { n?: number; next?: boolean; prev?: boolean };
  const handlePagination = ({ n, next, prev }: IPagination) => {
    if (next) {
      setSelectedPage(selectedPage + 1);
      return;
    }

    if (prev) {
      setSelectedPage(selectedPage - 1);
      return;
    }

    if (n) {
      setSelectedPage(n);
    }
  };

  return (
    <section className="flex h-full flex-col items-center justify-between py-20">
      {/* HEAD */}
      <div className="h-[76px] flex flex-row w-full bg-[#2A2E39] px-[20px] justify-around items-center">
        <div className="flex flex-row">
          <h2 className="font-[700] text-[22px]">Meus cursos</h2>
        </div>

        <div className="flex flex-row items-center h-full">
          <p className="font-[700] text-secundary text-[10px] mr-[21px]">
            FILTRAR POR CATEGORIA:{" "}
          </p>
          <MultipleSelect options={selectMock} />
        </div>

        <div>
          <Search />
        </div>

        <div className="flex flex-row gap-3">
          <p>VISUALIZAÇÃO</p>
          <button onClick={handleListView}>
            <ListMiniature color={listMiniature ? "#93BC1E" : "#646D85"} />
          </button>

          <button onClick={handleListView}>
            <ListIcon color={!listMiniature ? "#93BC1E" : "#646D85"} />
          </button>
        </div>

        <div>
          <Button
            iconDirection="left"
            icon={<PlusIcon color="white" />}
            label="Novo curso"
            className="text-[14px] w-[128px] h-[40px]"
          />
        </div>
      </div>
      <div className="gap-4 py-5 grid grid-cols-3 sm:grid-cols- md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 ">
        {/* CARDS */}
        {dataMock.map((data) => {
          return <CourseCard course={data} />;
        })}
      </div>

      {/* FOOTER */}
      <div className="w-full absolute bottom-0 left-0 pb-[34px] flex flex-row justify-between px-10">
        <MultipleSelect
          boxUp
          options={[
            "10 itens por página",
            "20 itens por página",
            "30 itens por página",
          ]}
        />

        <div className="flex flex-row gap-3">
          <Button
            label=""
            width="32px"
            height="32px"
            theme={selectedPage === 1 ? "disabled" : "outline"}
            handleClick={() => {
              // if(pagi)
              handlePagination({ prev: true });
            }}
            icon={
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.199839 6.9999C0.199839 6.76094 0.29108 6.522 0.473178 6.33982L6.20628 0.606774C6.57098 0.242078 7.16227 0.242078 7.52682 0.606774C7.89137 0.971323 7.89137 1.5625 7.52682 1.92722L2.45385 6.9999L7.52664 12.0726C7.89119 12.4373 7.89119 13.0284 7.52664 13.3929C7.16209 13.7578 6.5708 13.7578 6.2061 13.3929L0.473 7.65997C0.290873 7.4777 0.199839 7.23877 0.199839 6.9999Z"
                  fill="#ADDF45"
                />
              </svg>
            }
          />

          {selectedPage === 1 ? (
            <>
              <Button
                width="32px"
                height="32px"
                label={`${selectedPage}`}
                theme="primary"
              />
              <Button
                handleClick={(e: any) =>
                  handlePagination({ n: Number(e.target.innerText) })
                }
                width="32px"
                height="32px"
                label="2"
                theme="outline"
              />
              <Button
                handleClick={(e: any) =>
                  handlePagination({ n: Number(e.target.innerText) })
                }
                width="32px"
                height="32px"
                label="3"
                theme="outline"
              />
            </>
          ) : (
            <>
              <Button
                width="32px"
                height="32px"
                label={`${selectedPage - 1}`}
                theme="outline"
                handleClick={(e: any) =>
                  handlePagination({ n: Number(e.target.innerText) })
                }
              />
              <Button
                width="32px"
                height="32px"
                label={`${selectedPage}`}
                theme="primary"
                handleClick={(e: any) =>
                  handlePagination({ n: Number(e.target.innerText) })
                }
              />
              <Button
                width="32px"
                height="32px"
                label={`${selectedPage + 1}`}
                theme="outline"
                handleClick={(e: any) =>
                  handlePagination({ n: Number(e.target.innerText) })
                }
              />{" "}
            </>
          )}

          <Button
            label=""
            width="32px"
            height="32px"
            theme="outline"
            handleClick={() => handlePagination({ next: true })}
            icon={
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.80022 6.99986C7.80022 7.23882 7.70898 7.47775 7.52688 7.65994L1.79378 13.393C1.42908 13.7577 0.83779 13.7577 0.473241 13.393C0.108692 13.0284 0.108692 12.4373 0.473241 12.0725L5.54621 6.99986L0.473418 1.92716C0.108868 1.56246 0.108868 0.971346 0.473417 0.606827C0.837966 0.241953 1.42926 0.241953 1.79396 0.606827L7.52706 6.33978C7.70919 6.52206 7.80022 6.76099 7.80022 6.99986Z"
                  fill="#ADDF45"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
