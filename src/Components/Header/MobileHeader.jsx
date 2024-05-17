import { useState } from "react";
import MobileMenu from "../Menues/MobileMenu"

function MobileHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [theme, setTheme] = useState(true);

  let html = document.querySelector("#html");

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
      {/*------------- App Header Phone ------------------ */}
      <header className="md:hidden flex items-center justify-between dark:bg-[#242A38] bg-white w-full h-16 py-5 px-4 ">
        <div>
          <svg
            className="w-6 h-6 dark:text-white text-zinc-700 cursor-pointer "
            onClick={() => setOpenNav(!openNav)}
          >
            <use href="#bars-3"></use>
          </svg>
        </div>
        {openNav && <MobileMenu openNav={openNav} setOpenNav={setOpenNav} />}

        <div className=" bg-gray-100 dark:bg-[#2F3542] w-10 h-10 flex-center rounded-full cursor-pointer" onClick={changeTheme}>
          <svg className="w-6 h-6 dark:text-white text-zinc-700 cursor-pointer  " onClick={() => setTheme(!theme)}>
          {theme ? <use href="#moon"></use> : <use href="#sun"></use>}
          </svg>
        </div>
      </header>
    </>
  );
}

export default MobileHeader;
