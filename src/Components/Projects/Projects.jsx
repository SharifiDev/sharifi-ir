import React from "react";
import Title from "../Title";
import Project from "./Project";
import projectData from "./ProjectData";
export default function Projects() {
  return (
    <div className=" mb-12 md:mb-28 md:mt-40">
      <div className="container">
        {/* section head  */}
        <Title>
          <div className="text-zinc-700 dark:text-white w-full flex  justify-center">
            <h5 className="text-2xl md:text-5xl  font-morabbaMedium mb-[2px] md:mb-1.5">
              نمونه کارها
            </h5>
          </div>
          <div className="hidden text-orange-300 items-center md:gap-x-[4px]">
            <a href="#" className="">
              <span className="text-base md:text-xl "> مشاهده همه </span>
            </a>
            <svg className="w-5 h-5">
              <use href="#chever-arow"></use>
            </svg>
          </div>
        </Title>
        {/* Section Content row  */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-5 md:gap-y-20">
          {/* box */}
          {
            projectData.map(item =>(
              <Project key={item.id} {...item}/>

            ))
          }
        </div>
      </div>
    </div>
  );
}
