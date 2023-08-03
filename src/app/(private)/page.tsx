"use client";
import { uploadMockImage } from "@/assets";
import { Button } from "@/components/buttons";
import { CourseCard } from "@/components/class-card";
import { Input } from "@/components/inputs";
import { Search } from "@/components/search";
import { MultipleSelect } from "@/components/select";
import { ListIcon } from "@/components/svg-components/list-icon";
import { ListMiniature } from "@/components/svg-components/list-miniature";
import { PlusIcon } from "@/components/svg-components/plus-icon";
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

const typeMock = [{ value: "curso", label: "Curso" }];

const categoryMock = [{ value: "produtividade", label: "Produtividade" }];

export default function Home() {
  const [listMiniature, setListMiniature] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [length, setLength] = useState();
  const [courseCreateModal, setCourseCreateModal] = useState(false);
  const [detailsCourseModal, seSdetailsCourseModal] = useState(false);

  const handleDetailsCourseModal = () => {
    seSdetailsCourseModal(!detailsCourseModal);
  };

  const handleCreateModal = () => {
    setCourseCreateModal(!courseCreateModal);
  };

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
    <section className="flex h-full flex-col items-center justify-between py-20 sm:w-[100vw] sm:overflow-hidden">
      {/* HEAD */}




      <div className="relative sm:h-[76px] flex flex-col sm:flex-row w-full bg-[#2A2E39] px-[20px] justify-around sm:items-center">
        <div className="flex flex-col">
          <h2 className="font-[700] text-[22px] text-center sm:text-left">Meus cursos</h2>
        </div>

        <div className="hidden md:flex flex-row items-center h-full">
          <p className="font-[700] text-secundary text-[10px] mr-[21px] hidden lg:block">
            FILTRAR POR CATEGORIA:{" "}
          </p>
          <MultipleSelect options={selectMock} />
        </div>

        <div className="py-3 sm:py-0">
          <Search />
        </div>

        <div className="flex flex-row gap-3 py-5 sm:py-0">
          <p className="hidden lg:block">VISUALIZAÇÃO</p>
          <button onClick={handleListView}>
            <ListMiniature color={listMiniature ? "#93BC1E" : "#646D85"} />
          </button>

          <button onClick={handleListView}>
            <ListIcon color={!listMiniature ? "#93BC1E" : "#646D85"} />
          </button>
        </div>

        <div className="absolute bottom-[-10px] right-[20px] sm:relative sm:bottom-0 sm:right-0 py-5 sm:py-0">
          <Button
            handleClick={handleCreateModal}
            iconDirection="left"
            icon={<PlusIcon color="white" />}
            label="Novo curso"
            className="text-[14px] w-[128px] h-[40px]"
          />
        </div>
      </div>


      <div className="h-[80%] mt-40 pb-40 sm:mt-20 sm:pb-20 absolute overflow-y-scroll">
        <div className="gap-4 py-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 overflow-scroll">
          {/* CARDS */}
          {dataMock.map((data) => {
            return <CourseCard course={data} />;
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full z-50 bg-[#1F2126] fixed bottom-0 left-0 items-center h-24 sm:h-20 flex flex-col sm:flex-row justify-around sm:justify-between px-10  sm:py-0">
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

      {courseCreateModal && (
        <div className="flex justify-center py-20 absolute w-full h-full bg-opacity-50 bg-button-secundary-default">
          <div className="relative bg-[#2A2E39] w-[928px] h-[626px] p-[36px] overflow-y-scroll ">
            <h2 className="font-[700] text-[20px]">Novo curso</h2>
            {/* <hr className="bg-[#C4C4C4 opacity-10]"/> */}

            <p className="font-[400] text-[18px] pt-8">
              Prrencha os campos abaixo para cadastrar um novo curso.
            </p>

            <p className="font-[700] text-[16px] pt-[30px] pb-[20px]">
              Informações do curso
            </p>

            <Input
              className="bg-[#7784a5] mb-[20px]"
              title="Nome do curso"
              handleChange={() => console.log()}
            />

            <Input
              className="h-[153px] bg-[#252932] mb-[30px]"
              title="Descrição"
              handleChange={() => console.log()}
            />
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-5">
                <div className="bg-[#252932] h-[65px] flex flex-col relative">
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione uma opção"
                    className="h-[22px] bg-transparent outline-none"
                  >
                    <option className="text-primary" value={""}>
                      Selecione uma opção
                    </option>
                    {typeMock.map(({ label, value }) => {
                      return <option value={value}>{label}</option>;
                    })}
                  </select>
                  <hr className="absolute bottom-0 w-full" />
                </div>

                <div className="bg-[#252932] h-[65px] flex flex-col relative">
                  <Input
                    className="bg-[#252932]"
                    title="Link de acesso"
                    handleChange={() => console.log()}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="bg-[#252932] h-[65px] flex flex-col relative">
                  <label>Categoria</label>
                  <select
                    placeholder="Selecione uma opção"
                    className="h-[22px] bg-transparent outline-none"
                  >
                    <option className="text-primary" value={""}>
                      Selecione uma opção
                    </option>
                    {categoryMock.map(({ label, value }) => {
                      return <option value={value}>{label}</option>;
                    })}
                  </select>
                  <hr className="absolute bottom-0 w-full" />
                </div>

                <div className="bg-[#252932] h-[65px] flex flex-col relative">
                  <Input
                    className="bg-[#252932]"
                    title="Link de suporte"
                    handleChange={() => console.log()}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3>Imagem do curso</h3>
              <em className="text-[#E7E7E7] font-[400] text-[12px]">
                Tamanho mínimo: 720 x 720
              </em>
              <img
                className="pt-5  object-top rounded-md mb-5"
                src={uploadMockImage}
              />
              <Button
                width="109px"
                height="48px"
                label="Upload"
                theme="outline"
                className="rounded-lg"
              />
            </div>

            <Button
              handleClick={handleCreateModal}
              label=""
              width="24px"
              height="24px"
              className="bg-transparent absolute right-5 top-5 hover:bg-[#fff]"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4831 12.9883L10.4949 8.00068L15.4831 3.01302C16.1702 2.32497 16.1702 1.20818 15.4848 0.51826C14.7959 -0.173346 13.6806 -0.171567 12.9917 0.51648L7.99999 5.50769L3.00831 0.51648C2.31939 -0.171567 1.20406 -0.173346 0.515137 0.51826C-0.172007 1.20809 -0.172008 2.32488 0.516912 3.01302L5.50513 8.00068L0.516912 12.9883C-0.172008 13.6764 -0.172007 14.7932 0.515137 15.4831C0.858753 15.8289 1.31155 16 1.76266 16C2.21376 16 2.66478 15.8271 3.0084 15.4848L8.00008 10.4936L12.9918 15.4848C13.3354 15.8289 13.7864 16 14.2375 16C14.6886 16 15.1414 15.8271 15.485 15.4831C16.172 14.7932 16.172 13.6764 15.4831 12.9883Z"
                    fill="#93BC1E"
                  />
                </svg>
              }
            />

            <div className="absolute flex flex-row gap-5 right-10 pb-5">
              <Button
                width="136px"
                height="48px"
                theme="outline"
                label="Cancelar"
                handleClick={handleCreateModal}
              />
              <Button
                width="209px"
                height="48px"
                theme="primary"
                label="Cadastrar curso"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
