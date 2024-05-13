
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DropdownMenu } from "@radix-ui/themes";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollPosition > heroHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`self-stretch ${
            isFixed ? "fixed-top" : "sticky-top"
          }  bg-white-50 flex flex-row h-[82px] w-[1442px] max-w-full items-center justify-center py-[20px] pl-[120px] pr-[120px] box-border z-[99] gap-auto text-center text-8xl text-black font-karla mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border mq800:pl-[30px] mq800:pr-[30px] mq800:box-border`}
          style={{
            transition: "fixed-top .10s ease-in",
          }}
      >
        <Container className="flex justify-between items-center ">
          <div className="flex flex-row items-center justify-center gap-8 max-w-full mq450:gap-[30px] mq800:w-[237px]">
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

            {/* other links start */}
            <div>
              <ul className="flex flex-row items-start justify-start gap-[20px] text-xl mq800:hidden">
                <li>
                  <Link
                    to="/about"
                    className="relative leading-[130%] inline-block min-w-[54px]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    className="relative leading-[130%] inline-block min-w-[54px]"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[40px] max-w-full text-xl mq450:gap-[20px]">
            <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <DropdownMenu.Root>
                  {" "}
                  <DropdownMenu.Trigger>
                    <button className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px] outline-none border-none">
                      Country <DropdownMenu.TriggerIcon />
                    </button>
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
                    <button className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px] outline-none border-none">
                      USDC <DropdownMenu.TriggerIcon />
                    </button>
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
              {/* other links end */}

              <Link
                to="/Login"
                className="rounded-full bg-[#4E7FFF] bg-[100%] flex flex-row items-center justify-center py-2.5 px-[39.5px] text-left text-base text-green-0 font-manrope"
              >
                <p className="relative inline-block min-w-[41px]">Login</p>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
