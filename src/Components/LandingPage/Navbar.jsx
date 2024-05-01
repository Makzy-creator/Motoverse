
// import { DropdownMenu } from "@radix-ui/themes"

// const Navbar = () => {
//   return (
//     <div>
//         <header className="self-stretch sticky bg-white-50 flex flex-row items-center justify-between py-3 px-xl box-border top-[0] z-[99] max-w-full gap-[20px] text-center text-8xl text-black font-karla mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
//             <div className="w-[413px] flex flex-row items-center justify-start gap-[60px] max-w-full mq450:gap-[30px] mq800:w-[237px]">
//                 <a className="flex-1 flex flex-row items-center justify-start gap-[8px]" href="Hero">
//                     <img src="/images/logo.svg" className="h-[25px] w-[25px] relative overflow-hidden shrink-0" loading="lazy" />
//                     <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
//                         Motoverse
//                     </h3>
//                 </a>
//                 <div className="">
//                     <ul className="flex flex-row items-start justify-start gap-[20px] text-xl mq800:hidden">
//                         <a href="about.jsx" className="relative leading-[130%] inline-block min-w-[54px]">About</a>
//                         <a href="Technology.jsx" className="relative leading-[130%] inline-block min-w-[54px]">Technology</a>
//                     </ul>
//                 </div>
//             </div>

//             <div className="w-[387px] flex flex-row items-center justify-start gap-[40px] max-w-full text-xl mq450:gap-[20px]">
//                 <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
//                     <div className="flex flex-row items-center justify-start gap-[8px]">
//                         <div className="flex flex-row items-center justify-start">
//                             <DropdownMenu.Root>
//                                 <DropdownMenu.Trigger>
//                             <button className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px]">
//                                 Country <DropdownMenu.TriggerIcon />
//                             </button>
//                                 </DropdownMenu.Trigger>
//                                 <DropdownMenu.Content style={{
//                                     backgroundColor: "#00000000"
//                                 }} >
//                                     <div className="flex flex-col gap-2">
//                                         hello
//                                     </div>
//                                 </DropdownMenu.Content>
//                             </DropdownMenu.Root>
//                         </div>
//                     </div>
                    
//                     <div className="flex flex-row items-center justify-start gap-[8px]">
//                         <div className="flex flex-row items-center justify-start">
//                             <DropdownMenu.Root>
//                                 <DropdownMenu.Trigger>
//                             <button className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px]">
//                                 USDC <DropdownMenu.TriggerIcon />
//                             </button>
//                                 </DropdownMenu.Trigger>
//                                 <DropdownMenu.Content style={{
//                                     backgroundColor: "#00000000"
//                                 }} >
//                                     <div className="flex flex-col gap-2">
//                                         hello
//                                     </div>
//                                 </DropdownMenu.Content>
//                             </DropdownMenu.Root>
//                         </div>
//                     </div>



//                     {/* <div className="flex flex-row items-center justify-start gap-[8px]">
//                         <div className="flex flex-row items-center justify-start">
//                             <div className="relative leading-[130%] inline-block min-w-[51px]">
//                                 USDC
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
//                             <img className="w-4 h-2 relative" src="" alt="" />
//                         </div>
//                     </div> */}
//                 </div>
//                 <button className="rounded-5 bg-green-400 flex flex-row items-center justify-center py-2.5 px-[39.5px] text-left text-base text-green-0 font-manrope">
//                     <div className="relative inline-block min-w-[41px]">Login</div>
//                 </button>
//             </div>
//         </header>
//     </div>
//   )
// }

// export default Navbar


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { DropdownMenu, DropdownMenuTriggerIcon } from '@radix-ui/react-dropdown-menu'; // Import DropdownMenu components


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight / 2) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`self-stretch sticky bg-white-50 flex flex-row items-center justify-between py-3 px-xl box-border z-[99] max-w-full gap-[20px] text-center text-8xl text-black font-karla mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border mq800:pl-[30px] mq800:pr-[30px] mq800:box-border ${
          isFixed ? 'top-[0]' : ''
        }`}
      >
        {/* Your Navbar content here */}
        <div className="w-[413px] flex flex-row items-center justify-start gap-[60px] max-w-full mq450:gap-[30px] mq800:w-[237px]">
          <Link to="/" className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <img src="/images/logo.svg" className="h-[25px] w-[25px] relative overflow-hidden shrink-0" loading="lazy" alt="Logo" />
            <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
              Motoverse
            </h3>
          </Link>
          <div>
            <ul className="flex flex-row items-start justify-start gap-[20px] text-xl mq800:hidden">
              <li>
                <Link to="/about" className="relative leading-[130%] inline-block min-w-[54px]">About</Link>
              </li>
              <li>
                <Link to="/technology" className="relative leading-[130%] inline-block min-w-[54px]">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[387px] flex flex-row items-center justify-start gap-[40px] max-w-full text-xl mq450:gap-[20px]">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger as="button" className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px]">
                  Country <DropdownMenuTriggerIcon />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content style={{ backgroundColor: '#00000000' }}>
                  <div className="flex flex-col gap-2">
                    hello
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger as="button" className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px]">
                  USDC <DropdownMenuTriggerIcon />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content style={{ backgroundColor: '#00000000' }}>
                  <div className="flex flex-col gap-2">
                    hello
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
            <Link to="/login" className="rounded-5 bg-green-400 flex flex-row items-center justify-center py-2.5 px-[39.5px] text-left text-base text-green-0 font-manrope">
              <div className="relative inline-block min-w-[41px]">Login</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
