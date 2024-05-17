function Skill({ props }) {
  return (
    <>
      {props.map((item) => {
        const { id, img } = item;
        return (
          <div key={id} className="  dark:text-white bg-white dark:bg-[#242A38] rounded-2xl shadow-lg p-3   ">
            <div className="relative flex items-center xl:h-[150px] ">
              <img src={img} alt="p1" className=" mx-auto w-fuwll object-cover object-center rounded-xl" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skill;
