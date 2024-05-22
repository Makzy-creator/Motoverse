// src/components/Header.js
import { Link } from "react-router-dom";
import { DropdownMenu } from "@radix-ui/themes";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <nav className="flex items-center space-x-4 ">
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
        <a href="#" className="text-gray-700 hover:text-gray-900">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Technology
        </a>
      </nav>
      <div className="flex items-center space-x-4 gap-2">
        
          <DropdownMenu.Root>
            {" "}
            <DropdownMenu.Trigger>
              <span className="relative inline-flex items-center gap-2 outline-none border-none text-gray-700">
                Mexico <DropdownMenu.TriggerIcon />
              </span>
            </DropdownMenu.Trigger>{" "}
            <DropdownMenu.Content
              style={{
                backgroundColor: "#00000000",
              }}
            >
              <div className="flex flex-col gap-2">hello</div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            {" "}
            <DropdownMenu.Trigger>
              <span className="relative inline-flex items-center gap-2 outline-none border-none text-gray-700">
                USDC <DropdownMenu.TriggerIcon />
              </span>
            </DropdownMenu.Trigger>{" "}
            <DropdownMenu.Content
              style={{
                backgroundColor: "#00000000",
              }}
            >
              <div className="flex flex-col gap-2">hello</div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
       

        <div className="flex items-center space-x-2">

          <span className="text-gray-700 flex justify-between items-center mr-[20px]">
            <img className="my-[10px] mx-[10px] w-[20px] h-[16px]" src="/images/Purse.svg" alt="" loading="Lazy"/>
            20,430 USDC</span>
          <img
            src="/images/dp.svg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
