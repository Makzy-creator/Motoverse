// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropdownMenu } from "@radix-ui/themes";


const HeaderDash = () => {
  return (
    <div className="">
      <header className="self-stretch bg-[#F3F3F6] shadow-md flex flex-row box-border top-[0] z-[99] sticky max-w-full text-center font-text items-start justify-start pt-10 px-10 pb-5">
    
        <nav className="flex flex-row items-start space-x-4  mq450:gap-[30px] mq800:w-[237px] justify-between max-w-full gap-[20px]">
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

        <div className="flex items-center space-x-4 gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
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
          </div>
          
          <div className="flex flex-row items-center justify-start gap-[8px]">
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
          </div>
         

          {/* <div className="flex items-center space-x-2">

          </div> */}
          <div className="flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-row gap-[8px] text-gray-700 justify-between items-center">
               <div className="flex flex-col items-center justify-center m-[10px] box-border w-6 h-6">
                <img
                  className="w-5 h-4 relative "
                  loading="lazy"
                  alt=""
                  src="/images/Purse.svg"
                />
              </div>
              <div className="relative inline-block whitespace-nowrap">
                20,430 USDC
              </div>
            </div>

            <img
              className="h-[42px] w-[42px] rounded-full object-cover"
              loading="lazy"
              alt=""
              src="/images/dp.svg"
            />
          </div>

        </div>
     

      </header>
    </div>

  )
}

export default HeaderDash

/*

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Homepage = () => {
  return (
    <header className="self-stretch shadow-[0px_4px_13.2px_rgba(0,_0,_0,_0.1)] bg-white-50 flex flex-row items-start justify-start pt-10 px-10 pb-5 box-border top-[0] z-[99] sticky max-w-full text-center text-xl text-black font-text">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[60px] mq450:gap-[30px]">
            <div className="w-[144.7px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border gap-[11.6px]">
              <img
                className="h-7 w-7 relative"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] mq1050:hidden">
              <div className="relative inline-block min-w-[57px]">About</div>
              <div className="relative inline-block min-w-[108px]">
                Technology
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <select className="bg-[transparent] [border:none] flex flex-row items-center justify-start font-text text-xl text-black" />
          <Form.Select className="font-text text-xl text-black" />
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-col items-center justify-center py-1 px-0.5 box-border w-6 h-6">
                <img
                  className="w-5 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="relative inline-block min-w-[122px] whitespace-nowrap">
                20,430 USDC
              </div>
            </div>
            <img
              className="h-[42px] w-[42px] rounded-l object-cover"
              loading="lazy"
              alt=""
              src="/frame-4@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Homepage;







*/