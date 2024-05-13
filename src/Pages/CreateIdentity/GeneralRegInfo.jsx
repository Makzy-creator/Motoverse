import Navbar from "../../Components/LandingPage/Navbar";
// import { Form } from "react-bootstrap";
import { useState, useCallback } from "react";
import PortalPopup from "../../Components/PortalPopup";
import Frame from "../../Components/Login";
import { Link, useNavigate } from "react-router-dom";
import { DropdownMenu } from "@radix-ui/themes";

const GeneralRegInfo = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/UploadDocument");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/Login");
  }, [navigate]);
  return (
    <>
      <div>
        <Navbar />
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[43px] max-w-full text-center font-manrope text-20xl text-green-900 font-text mq675:gap-[21px]">
          <div className="w-[1189px] flex flex-row items-start justify-center pt-[43px] pb-0 px-5 box-border max-w-full">
            <div className="w-[585px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[60px] max-w-full  mq675:gap-[30px]">
              {/* Progress bar starts */}
              <div className="self-stretch h-3 rounded-full bg-[#D9D9D9] flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
                <div className="self-stretch w-[585px] relative rounded-full bg-[#D9D9D9] hidden max-w-full" />
                <div className="self-stretch w-[455px] relative rounded-full bg-[#4D28FF] bg-100% max-w-full z-[1]" />
              </div>
              {/* progress bar ends */}

              {/* main section starts */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h3 className="m-0 relative leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq750:text-12xl mq750:leading-[37px]">
                    General Information
                  </h3>
                </div>
              </div>

              {/* Form Section */}
              <div className="flex flex-col flex-1 align-middle items-center justify-center w-[585px] h-[435px] pt-[20px] pb-[203px] gap-[40px]">
                {/* Form starts */}
                <div className="self-stretch flex flex-col items-start justify-start max-w-full w-[585px] gap-[6px] text-left text-base mq675:gap-[20px]">
                  <h5 className="text-green-900 align-top h-[27px]">
                    Legal Name
                  </h5>
                  <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                    <b className="self-stretch relative">Name</b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start md:gap-[10px] gap-[15px] max-w-full w-[585px] h-[48px]">
                    <div className="self-stretch rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between gap-[20px]">
                      <div className="flex flex-row items-center justify-center md:w-[282.5px] w-[270px] h-[24px]">
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="First"
                            className="text-[16px] items-center justify-center whitespace-pre-wrap w-full outline-none border-none bg-transparent relative max-w-full py-3 pr-6 pl-3"
                            name="text"
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch w-[282.5px] h-[48px] rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between">
                      <div className="flex flex-row items-center justify-center md:w-[282.5px] w-[270px] h-[24px] ">
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Last"
                            className="text-[16px] items-center justify-center whitespace-pre-wrap w-full outline-none border-none bg-transparent relative max-w-full py-3 pr-6 pl-3"
                            name="text"
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Form Ends*/}

                {/* Form starts */}
                <div className="self-stretch flex flex-col items-start justify-start max-w-full gap-[6px] text-left text-base mq675:gap-[20px]">
                  <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                    <b className="self-stretch relative">Address</b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full w-[585px] h-[48px] ">
                    <div className="self-stretch w-[585px] h-[48px] rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between gap-[20px]">
                      <div className="flex flex-row items-center justify-start w-[561px] h-[24px]">
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Address 1"
                            className="text-[16px] whitespace-pre-wrap w-full outline-none border-none bg-transparent relative max-w-full py-3 pr-6 pl-3"
                            name="text"
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Form Ends*/}

                {/* Form starts */}
                <div className="self-stretch flex flex-col items-start justify-start max-w-full gap-[6px] text-left text-base mq675:gap-[20px]">
                  <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                    <b className="self-stretch relative">Country</b>
                  </div>

                  <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full w-[585px] h-[48px]">
                    <div className="self-stretch w-[585px] h-[48px] rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row items-center justify-between gap-[20px]">
                      <div className="self-stretch flex flex-row items-center justify-end">
                        <div className="relative max-w-full py-3 pr-6 pl-3 w-[515px]">
                          <input
                            type="text"
                            placeholder="Country"
                            className="text-[16px] whitespace-pre-wrap w-full outline-none border-none bg-transparent"
                            name="text"
                            id=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start pr-[2px] md:pr-[24px]">
                        <DropdownMenu.Root>
                          {" "}
                          <DropdownMenu.Trigger>
                            <button className="items-center justify-start w-[24px] h-[24px] relative outline-none flex flex-wrap">
                              <DropdownMenu.TriggerIcon className="" />
                            </button>
                          </DropdownMenu.Trigger>{" "}
                          <DropdownMenu.Content
                            style={{
                              backgroundColor: "#00000000",
                            }}
                          >
                            <div className="flex flex-1 flex-wrap items-start justify-start">
                              hello
                            </div>
                          </DropdownMenu.Content>
                        </DropdownMenu.Root>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Form Ends*/}

                {/* Form starts */}
                {/* Country code starts */}
                <div className="flex flex-row items-start justify-start w-[585px] h-[76px] gap-[30px] md:gap-[29px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start md:w-[278px] w-[265.5px] h-[76px] max-w-full gap-[6px] text-left text-base mq675:gap-[20px]">
                    <div className=" flex flex-col items-start justify-start max-w-full">
                      <b className="self-stretch relative">Country Code</b>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
                      <div className="self-stretch md:w-[278px] w-[265.5px] h-[48px] rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between text-grey-500 cursor-pointer">
                        <div className="flex flex-row items-center justify-start h-[24px]">
                          <div className="relative max-w-full py-3 pr-6 pl-3 ">
                            <input
                              type="text"
                              placeholder="Country Code"
                              className="text-[16px] whitespace-pre-wrap w-full outline-none border-none bg-transparent "
                              name="text"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start md:pr-[24px] lg:pr-[20px]">
                          <DropdownMenu.Root>
                            {" "}
                            <DropdownMenu.Trigger>
                              <button className="items-center justify-start w-[24px] h-[24px] relative outline-none flex flex-wrap">
                                <DropdownMenu.TriggerIcon className="" />
                              </button>
                            </DropdownMenu.Trigger>{" "}
                            <DropdownMenu.Content
                              style={{
                                backgroundColor: "#00000000",
                              }}
                            >
                              <div className="flex flex-1 flex-wrap items-start justify-start">
                                hello
                              </div>
                            </DropdownMenu.Content>
                          </DropdownMenu.Root>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Country code ends */}

                  {/* Phone number starts */}
                  <div className="self-stretch flex flex-col items-start justify-start w-[278px] h-[76px] text-left text-base mq675:gap-[20px] gap-[6px] max-w-full">
                    <div className=" items-start justify-start max-w-full">
                      <b className="text-[16px] self-stretch relative">
                        Phone Number
                      </b>
                    </div>

                    <div className="self-stretch md:w-[278px] w-[265.5px] h-[48px] rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between text-grey-500 cursor-pointer">
                      <div className="flex flex-row items-center justify-start h-[48px] ">
                        <div className="relative max-w-full py-3 pr-6 pl-3">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            className="text-[16px] whitespace-pre-wrap w-full outline-none border-none bg-transparent"
                            name="text"
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* phone number ends */}
                </div>
                {/*  Form Ends*/}
              </div>
            </div>
                              
            {/* main section ends */}
          </div>

          <footer className="self-stretch flex flex-row items-start justify-between pt-[20px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
            <div
              className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
              onClick={onFrameContainerClick1}
            >
              <Link to="/Login" className="" target="blanc">
                <p className="relative inline-block min-w-[52px]">Cancel</p>
              </Link>
            </div>

            <div
              className="rounded-full bg-[#3D6470] flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap text-white text-center"
              onClick={onFrameContainerClick}
            >
              <Link to="/UploadDocument" className="" target="blanc">
                <p className="relative inline-block min-w-[51px]">Next</p>
              </Link>
            </div>
          </footer>
        </div>
      </div>

      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default GeneralRegInfo;
