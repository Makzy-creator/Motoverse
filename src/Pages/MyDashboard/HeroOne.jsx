import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div className="{`w-[1120px] h-[436px] mx-[40px] my-[40px] self-stretch flex flex-col items-start justify-start font-manrope shrink-0 [debug_commit:1de1738] max-w-full text-left text-base text-green-900 font-text ${className}`}">
      <h3 className="inline-block leading-[47px] font-inherit text-20xl font-bold text-[#1F353C] mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
        Hello, John Smith
      </h3>
      <p className="relative inline-block max-w-full">
        Welcome to your dashboard, this is your space to view and manage all the
        moving parts of your account.
      </p>
      <p className="pt-[8px] text-[#4D28FF] gap-[12px] flex flex-row">
        Tier 1: <span className="font-bold">Observer</span>
        <img
          src="/images/InfoIcon.svg"
          loading="Lazy"
          alt=""
          className="m-[2.25px]"
        />
      </p>

      {/* ---------------------------notice section--------------------- */}
      <div className="self-stretch h-[315px] mt-[12px] rounded-2xl flex flex-col items-start justify-start p-5 box-border gap-[24px] max-w-full text-xl bg-[#F0ECFF] bg-100%">
        <div className="self-stretch text-[#1F353C] flex flex-col items-start justify-start gap-[11.5px] max-w-full font-inherit">
          {/* Heading starts */}
          <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full lg:flex-wrap font-inherit">
            <p className="text-[20px] text-inherit relative inline-block max-w-full mq450:text-base">
              Update your information to unlock other features
            </p>
            <p className="text-base relative inline-block min-w-[33px]">hide</p>
          </div>
          {/* Heading ends */}

          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-[#D0DFE4]" />

          <div className="font-inherit self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-center text-base  text-[#4D28FF] pt-[12x]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">

              <div className="w-[1080px] h-[24px] font-inherit flex-1 flex flex-row items-start justify-between max-w-full mq1050:flex-wrap pb-[20px]">
                {/* Left hand side */}
                <div>
                    <p className="self-stretch mt-px gap-[12px] flex flex-row items-start justify-start">
                    Tier 2:
                    <span className="font-bold relative inline-block min-w-[126px]">
                      Buyer and Seller
                    </span>
                  </p>
                </div>
                  {/* Left hand side ends */}

                 {/* Right hand side starts */}
              <div className="w-[472px] h-[24px] flex flex-row items-center justify-end gap-[20px] max-w-full text-[#1F353C] mq750:flex-wrap mq750:gap-[10px]">
                <div className="flex-1 flex flex-row items-start justify-start relative gap-[56px] max-w-[calc(100%_-_49px)]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-[#ffffff]" />
                  <div className="h-2 w-2 relative rounded-full bg-[#43C705] z-[1]" />
                </div>
                <h6 className="font-bold font-inherit w-[29px] relative inline-block">0%</h6>
                <Link to="" className="">
              <img className="w-[24px] h-[24px] relative object-contain" loading="lazy" alt="" src="/images/upArrowIcon.svg" />
                    </Link>
              </div>
              {/* Right hand side ends */}
              </div>

              <div
                className="self-stretch flex-1 flex flex-row max-w-full gap-[40px] lg:gap-[20px] w-[1080px] font-manrope items-start justify-start py-0 pr-0 pl-[60px] box-border text-[#1F353C] lg:pl-[30px] lg:box-border mq750:gap-[20px] mq1050:flex-wrap
              "
              >
                <div className="self-stretch w-[490px] h-[120px] max-w-full flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[318px] min-h-[120px] mq1050:min-h-[auto]">
                  <div className="self-stretch flex flex-col font-inherit items-start justify-start gap-[8px]">
                    <h6 className="font-bold relative">
                      Identity Verification
                    </h6>
                    <p className="items-start justify-start flex flex-col">
                      Requirements: Basic information,{" "}
                      <span className="block ">setup wallet, and password</span>
                    </p>
                  </div>
                  <div className="rounded-full bg-[#3D6470] bg-[100%] gap-[10px] text-[#FFFFFF] flex flex-row items-center justify-center w-[200px] h-[30px] whitespace-nowrap cursor-pointer">
                    <Link to="" className="" target="">
                      <p className="relative  py-2.5 px-[20px] text-base text-center justify-center  min-w-[127px]">
                        Verify My Identity
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="self-stretch w-[490px] h-[120px] max-w-full flex flex-col  items-start justify-between gap-[auto] flex-1 min-w-[318px] min-h-[120px] mq1050:min-h-[auto]">
                  <div className="text-[#1F353C] flex flex-col font-manrope items-start justify-start self-stretch gap-[8px]">
                    <h6 className="relative font-bold">Address Verification</h6>
                    <p className="self-stretch relative text-left">
                      Requirement: Proof of address, identification document
                    </p>
                  </div>
                  <div className="rounded-full bg-[#3D6470] bg-[100%] gap-[10px] text-white flex flex-col items-center justify-center w-[200px] h-[30px] whitespace-nowrap cursor-pointer">
                    <Link to="" className="" target="">
                      <p className="relative min-w-[41px] py-2.5 px-[20px] text-base text-center justify-center">
                        Verify My Identity
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-[#D0DFE4]" />

            <div className="w-[1080px] h-[24px] mt-[-7px] flex-1 flex flex-row items-start justify-between max-w-full mq1050:flex-wrap mb-[20px]">
              <div>
                <p className="self-stretch gap-[12px] flex flex-row ">
                  Tier 3:
                  <span className="font-bold relative inline-block min-w-[126px]">
                    Vehicle Verifier
                  </span>
                </p>
              </div>
                
                 {/* Right hand side starts */}
              <div className="w-[472px] h-[24px] flex flex-row items-center justify-end gap-[20px] max-w-full text-[#1F353C] mq750:flex-wrap mq750:gap-[10px]">
                <div className="flex-1 flex flex-row items-start justify-start relative gap-[56px] max-w-[calc(100%_-_49px)]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-full bg-[#ffffff]" />
                  <div className="h-2 w-2 relative rounded-full bg-[#43C705] z-[1]" />
                </div>
                <h6 className="font-bold font-inherit w-[29px] relative inline-block">0%</h6>
                <Link to="" className="">
              <img className="w-[24px] h-[24px] relative object-contain" loading="lazy" alt="" src="/images/downArrowIcon.svg" />
                    </Link>
              </div>
              {/* Right hand side ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;


