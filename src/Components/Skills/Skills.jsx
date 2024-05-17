
import { useState } from "react";
import Skill from './Skill'
import Title from '../Title'
import skillData from './DataSkills'
function Skills() {
  const [dataP, setDataP] = useState(skillData);

  return (
    <>
      <section className="bg-porductfs dark:bg-gray-900 pt-8 md:pt-[192px]">
        <div className="container ">
          <div className="wrapper">
            {/* Skill Header  */}
            <Title>
              <div className="text-zinc-700 dark:text-white flex w-full justify-center text-cente  ">
                <h5 className="text-2xl md:text-5xl text-center font-morabbaMedium mb-[2px] md:mb-1.5">
                 مهارت ها
                </h5>
              </div>
            </Title>
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4   md:gap-5 gap-3.5 mt-5 md:mt-12">
              {/*<---  section course  ----> */}
              <Skill props={dataP} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
