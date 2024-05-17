import { useState } from "react";
import CartDeskTop from '../Cart/CartDeskTop'
import DeskTopMenu from '../Menues/DeskTopMenu'

function DesktopHeader() {
  const [theme, setTheme] = useState(true);

  let html = document.getElementById("#theme");

  let changeTheme = () => {
    if (theme) {
      setTheme(false);
      html.setAttribute("class", "dark");
    } else {
      setTheme(true);
      html.removeAttribute("class", "dark");
    }
  };

  return (
    <>
      {/* <!---------- App Header Desktop-----------  --> */}
      <header className=" hidden  sticky top-0   md:block z-20  h-20 w-[100%] mx-auto py-5 px-5 lg:px-8 xl:px-10  dark:bg-[#242A38] bg-white   text-zinc-700 dark:text-white tracking-[6.5%]">
        <div className="flex items-center  justify-between">
          {/*---------------- right header --------------------------- */}
          <div class="right   ">
            <ul className="child:leading-[54px] flex items-center   gap-x-5 xl:gap-x-9  text-xl  child-hover:text-orange-200 tracking-tighter ">
              <li>
                <a href="ٌ#" className="hidden">
                  <img src="./images/logo.png" className="w-16 h-12  rounded" alt="logo" />
                </a>
              </li>
              <li class=" ">
                <a href="" class="">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#"> درباره من</a>
              </li>
              <li className=" group">
                <a href="" className="">
                  نمونه کار ها 
                 
                </a>
                {/*---------------- Menu mobile --------------------------- */}
                <DeskTopMenu/>
              </li>
              <li>
                <a href=""> بلاگ</a>
              </li>
              <li>
                <a href=""> تماس با من  </a>
              </li>
            </ul>
          </div>

          {/*---------------- left header --------------------------- */}
          <div class=" left flex items-center gap-5">
            {/*---------------- baskit --------------------------- */}
            <div className="hidden relative group ">
              <svg className="w-8 h-8   text-orange-300 dark:text-orange-200">
                <use href="#shopping-cart"></use>
              </svg>
            {/*---------------- Cart DeskTop --------------------------- */}
              <CartDeskTop/>
           
            </div>

            {/*---------------- theme --------------------------- */}
            <div className=" bg-gray-100 dark:bg-[#2F3542] w-12 h-12 flex-center rounded-full cursor-pointer " onClick={changeTheme}>
              <svg className="w-8 h-8  ">
                {theme ? <use href="#moon"></use> : <use href="#sun"></use>}
              </svg>
            </div>

            {/*---------------- Line  --------------------------- */}
            <div className="hidden items-center   xl:mx-10 ">
              <span className="line mb-[65px]"></span>
            </div>
            {/*---------------- loging --------------------------- */}
            <div className=" hidden">
              <div className="flex items-center gap-2 cursor-pointer">
                <svg className="w-8 h-8 text-orange-300 dark:text-orange-200">
                  <use href="#arrow-left"></use>
                </svg>
                <span className="hidden lg:inline-block text-orange-300 dark:text-orange-200 text-xl">
                  ورود | ثبت‌نام
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="bg-[#00000066]/40  fixed inset-0 ">ss</div> */}
    </>
  );
}

export default DesktopHeader;
