import { defaultCourseImage } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../buttons";
import { PlayIcon } from "../svg-components/play-icon";
import { OptionsIcon } from "../svg-components/options-icon";

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
        />

        <Button
          className="absolute right-0"
          label=""
          icon={<OptionsIcon />}
          width="40px"
          height="40px"
          theme="secundary"
        />
      </div>
    </div>
  );
};
