import { CourseCard } from "@/components/class-card";
import Image from "next/image";

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

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      {dataMock.map((data) => {
        return <CourseCard course={data} />;
      })}
    </section>
  );
}
