"use client";
import { Button } from "@/components/buttons";
import { CourseCard } from "@/components/class-card";
import { Search } from "@/components/search";
import { MultipleSelect } from "@/components/select";
import { ListIcon } from "@/components/svg-components/list-icon";
import { ListMiniature } from "@/components/svg-components/list-miniature";
import { PlusIcon } from "@/components/svg-components/plus-icon";
import Image from "next/image";
import { useState } from "react";

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
];

const selectMock = ["Produtividade"];

export default function Home() {
  const [listMiniature, setListMiniature] = useState(true);

  const handleListView = () => {
    setListMiniature(!listMiniature);
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
      {/* CARDS */}
      {dataMock.map((data) => {
        return <CourseCard course={data} />;
      })}

      {/* FOOTER */}
    </section>
  );
}
