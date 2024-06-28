import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavSection = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  //Array containing navgation items
  const navItems = [
    // { id: 1, text: "About" },
    // { id: 2, text: "Technology" },
   
  ];

  const navItemms = [
    //  { id: 3, text: "Country" },
    // { id: 3, text: "USDC" },
  ];

  return (
    <header className="bg-[#F3F3F6] flex justify-between items-center h-24 mx-auto px-4 font-karla shadow-md">
      <div className="flex items-center justify-between gap-2"> 
      {/* Logo */}
      <Link
        to="/"
        className="flex-1 flex flex-row items-center justify-start gap-[8px]"
      >
        <img
          src="/images/newlogo.svg"
          className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt="Logo"
        />
        <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
          Motoverse
        </h3>
      </Link>
      {/* Logo end */}

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#003bdf] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link
              to="About.jsx"
              className="flex-1 flex flex-row items-center justify-start gap-[8px]"
            >
            About
            </Link>
            <Link
              to="About.jsx"
              className="flex-1 flex flex-row items-center justify-start gap-[8px]"
            >
            About
            </Link>
            
          </li>
        ))}
      </ul>
    </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex">
        {navItemms.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#003bdf] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link
              to="About.jsx"
              className="flex-1 flex flex-row items-center justify-start gap-[8px]"
            >
            Country
            </Link>

            <Link
              to="About.jsx"
              className="flex-1 flex flex-row items-center justify-start gap-[8px]"
            >
            USDC
            </Link>

            {/* {itemms.text} */}
          </li>
        ))}
      </ul>

      {/* mobile navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile navigation menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F3F3F6] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* mobile logo */}
        <Link
          to="/"
          className="flex-1 flex flex-row items-center justify-start gap-[8px]"
        >
          <img
            src="/images/newlogo.svg"
            className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Logo"
          />
          <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
            Motoverse
          </h3>
        </Link>

        {/* mobile navigation items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {/* {item.text} */}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavSection;
