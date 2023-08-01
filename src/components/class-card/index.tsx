"use client";
import { defaultCourseImage } from "@/assets";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "../buttons";
import { PlayIcon } from "../svg-components/play-icon";
import { OptionsIcon } from "../svg-components/options-icon";
import { Input } from "../inputs";

interface IClassCard {
  course_name: string;
  course_description: string;
  course_type: string;
  course_category: string;
  course_link: string;
  link_support: string;
  course_image: string | null;
}

export const CourseCard: FC<{ course: IClassCard }> = ({ course }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsCourseModal, seSdetailsCourseModal] = useState(false);

  const handleDetails = () => {
    seSdetailsCourseModal(!detailsCourseModal);
  };

  const handleSwitchModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="bg-[#2A2E39] h-[170px] w-[452px] flex-row flex p-[18px]">
      <Image
        alt={course.course_name}
        src={course.course_image ? course.course_image : defaultCourseImage}
        width={134}
        height={134}
        className="rounded object-cover"
      />

      <div className="relative pl-[14px] w-full flex flex-col justify-start">
        <h2>{course.course_name}</h2>

        <div className="flex flex-row pt-[23px] items-center justify-start w-full mb-[30px]">
          <p className="text-[12px] text-secundary mr-[29px]">
            <em className="not-italic font-bold">Tipo:</em> {course.course_type}
          </p>
          <div className="bg-[#3D4353] rounded pl-3 pr-3 pt-1 pb-1 flex">
            <a className="text-[10px]">{course.course_category}</a>
          </div>
        </div>

        <Button
          className="text-[14px] font-[700] p-1 "
          icon={<PlayIcon />}
          label="Acessar área de aprendizagem"
          handleClick={handleDetails}
        />

        <Button
          className="absolute right-0"
          label=""
          icon={<OptionsIcon />}
          width="40px"
          height="40px"
          theme="secundary"
          handleClick={handleSwitchModal}
        />

        {modalOpen && (
          <div className="right-0 top-12 rounded absolute w-[206px] h-[68px] bg-[#222429] flex flex-col justify-center">
            <button>
              <div className="flex flex-row items-center gap-2 px-4">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.50002 0.4375C3.79169 0.4375 1.47877 2.12208 0.541687 4.5C1.47877 6.87792 3.79169 8.5625 6.50002 8.5625C9.20835 8.5625 11.5213 6.87792 12.4584 4.5C11.5213 2.12208 9.20835 0.4375 6.50002 0.4375ZM6.50002 7.20833C5.00502 7.20833 3.79169 5.995 3.79169 4.5C3.79169 3.005 5.00502 1.79167 6.50002 1.79167C7.99502 1.79167 9.20835 3.005 9.20835 4.5C9.20835 5.995 7.99502 7.20833 6.50002 7.20833ZM6.50002 2.875C5.60085 2.875 4.87502 3.60083 4.87502 4.5C4.87502 5.39917 5.60085 6.125 6.50002 6.125C7.39919 6.125 8.12502 5.39917 8.12502 4.5C8.12502 3.60083 7.39919 2.875 6.50002 2.875Z"
                    fill="#93BC1E"
                  />
                </svg>
                <p>Ver detalhes</p>
              </div>
            </button>
            <button>
              <div className="flex flex-row items-center gap-2 px-4">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.1629 5.09379L6.6754 5.59212C6.2854 5.98212 6.04165 6.31254 6.04165 7.12504H4.95831V6.85421C4.95831 6.25296 5.20206 5.71129 5.59206 5.32129L6.26373 4.63879C6.46415 4.44379 6.58331 4.17296 6.58331 3.87504C6.58331 3.58772 6.46918 3.31217 6.26601 3.10901C6.06285 2.90584 5.7873 2.79171 5.49998 2.79171C5.21266 2.79171 4.93711 2.90584 4.73395 3.10901C4.53078 3.31217 4.41665 3.58772 4.41665 3.87504H3.33331C3.33331 3.30041 3.56159 2.7493 3.96792 2.34298C4.37424 1.93665 4.92534 1.70837 5.49998 1.70837C6.07462 1.70837 6.62572 1.93665 7.03204 2.34298C7.43837 2.7493 7.66665 3.30041 7.66665 3.87504C7.66587 4.3318 7.48483 4.76978 7.1629 5.09379ZM6.04165 9.29171H4.95831V8.20837H6.04165V9.29171ZM5.49998 0.083374C4.78865 0.083374 4.08429 0.22348 3.42711 0.495693C2.76993 0.767906 2.1728 1.1669 1.66982 1.66988C0.653996 2.6857 0.083313 4.06345 0.083313 5.50004C0.083313 6.93663 0.653996 8.31438 1.66982 9.3302C2.1728 9.83319 2.76993 10.2322 3.42711 10.5044C4.08429 10.7766 4.78865 10.9167 5.49998 10.9167C6.93657 10.9167 8.31432 10.346 9.33014 9.3302C10.346 8.31438 10.9166 6.93663 10.9166 5.50004C10.9166 2.50462 8.47915 0.083374 5.49998 0.083374Z"
                    fill="#93BC1E"
                  />
                </svg>

                <p>Suporte</p>
              </div>
            </button>
          </div>
        )}
      </div>

      {detailsCourseModal && (
        <div
          style={{ zIndex: 100 }}
          className="flex left-0 justify-center py-20 absolute items-start w-full bg-opacity-50 bg-button-secundary-default"
        >
          <div className="relative bg-[#2A2E39] w-[928px] h-[626px] p-[36px] overflow-y-scroll ">
            <h2>Detalhe do curso</h2>

            <div className="flex flex-row items-center">
              <Image
                alt={course.course_name}
                src={
                  course.course_image ? course.course_image : defaultCourseImage
                }
                width={134}
                height={134}
                className="rounded object-cover pt-[30px]"
              />

              <div className="pl-10 flex flex-col">
                <h3>{course.course_name}</h3>
                <em className="text-[#646D85] text-[12px] pt-[16px]">AUTOR</em>
                <p>Jhon Doe</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="mt-10 bg-[#252932] h-[118px] overflow-y-scroll p-5">
                <p className="text-[#646D85] text-[12px]">DESCRIÇÃO</p>
                <p>{course.course_description}</p>
              </div>

              <div className="mt-10 bg-[#252932] h-[118px] overflow-y-scroll p-5">
                <p className="text-[#646D85] text-[12px]">DETALHES</p>
                <div className=" flex justify-between">
                  <p className="text-[12px] font-[600]">Cattegoria</p>{" "}
                  <em className="text-[12px] font-[600]">
                    {course.course_category}
                  </em>
                </div>
                <hr className="border-[#3D4353]" />

                <div className=" flex justify-between">
                  <p className="text-[12px] font-[600]">Tipo</p>{" "}
                  <em className="text-[12px] font-[600]">
                    {course.course_type}
                  </em>
                </div>
                <hr className="border-[#3D4353]" />

                <div className=" flex justify-between">
                  <p className="text-[12px] font-[600]">Data de cadastro</p>{" "}
                  <em className="text-[12px] font-[600]">01/01/2023</em>
                </div>
                <hr className="border-[#3D4353]" />
              </div>

            </div>
              <div className="pt-10 flex justify-end w-ful">
                <Button
                  handleClick={handleDetails}
                  label="Excluir curso"
                  width="153px"
                  height="36px"
                  className="bg-[#F96C6C] right-5 bottom-20 hover:bg-[#fff]"
                />
              </div>

            <Button
              handleClick={handleDetails}
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

            <Button
              handleClick={handleDetails}
              label="Voltar para minhas compras"
              width="273px"
              height="48px"
              className="bg-primary absolute right-5 bottom-5 hover:bg-[#fff]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
