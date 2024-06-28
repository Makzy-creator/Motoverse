import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div className="">
      <div className="self-stretch w-[1120px] h-[436px] flex flex-col max-w-full items-start gap-[12px]">
        <div className="self-stretch w-[1120px] h-[120px] max-w-full flex flex-col items-start py-[4px] text-[#1F353C] font-manrope">
          <h3 className="leading-[47px] text-20xl font-inherit font-bold mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
            Hello, John Smith
          </h3>
          <p className="self-stretch items-start text-left text-inherit max-w-full">
            Welcome to your dashboard, this is your space to view and manage all
            the moving parts of your account.
          </p>
          <p className="pt-[8px] text-[#4D28FF] gap-[12px] flex flex-row">
            Tier 1: <span className="font-bold">Observer</span>
            <img
              src="/images/InfoIcon.svg"
              loading="Lazy"
              alt=""
              className=""
            />
          </p>
        </div>

        {/* ---------------------------notice section--------------------- */}
        <div className="self-stretch w-[1120px] h-[315px] text-[#1F353C] flex flex-col items-center mt-[12px] rounded-2xl max-w-full font-inherit px-[20px] py-[20px] box-border bg-[#F0ECFF] bg-100%">
          <div className="self-stretch w-[1080px] h-[275px] max-w-full"> 
          {/* box shadow: 0px 5px 23.1px 0px */}
            {/* notice Heading starts */}
            <div className="flex-1 flex items-start justify-between max-w-full lg:flex-wrap font-inherit ">
              <p className="text-xl max-w-full font-inherit text-inherit leading-normal mq450:text-base">
                Update your information to unlock other features
              </p>
              <p className="text-base relative inline-block min-w-[33px]">
                hide
              </p>
            </div>
            {/* notice Heading ends */}

              {/* line */}
              <div className="self-stretch flex flex-col items-center h-px border-t-[1px] border-solid border-[#D0DFE4] my-[12px]" />
              {/* line ends */}

              {/* notice body content starts */}
            <div className="self-stretch w-[1080px] h-[164px] flex flex-col items-end gap-[20px] max-w-full text-base text-[#4D28FF]">
              <div className="">
                <div className="self-stretch w-[1080px] h-[24px] font-inherit flex items-center justify-between max-w-full box-border mq1050:flex-wrap ">
                  {/* Left hand side */}
                  <div className="w-[227px] h-[22px] max-w-full flex items-center">
                    <p className="flex gap-[12px]">
                      Tier 2:
                      <span className="font-bold text-center">
                        Buyer and Seller
                      </span>
                    </p>
                  </div>
                  {/* Left hand side ends */}

                  {/* Right hand side starts */}
                  <div className="w-[472px] h-[24px] flex items-center justify-end gap-[40px] max-w-full text-[#1F353C] mq750:flex-wrap mq750:gap-[10px]">
                    <div className="w-[408px] h-[15px] flex items-center gap-[20px] max-w-full relative">
                      <div className="w-[359px] h-[8px] flex flex-1 flex-col items-start gap-[56px] max-w-full rounded-full bg-[#FBFBFB]"/>
                      <div className="absolute h-2 w-2 rounded-full bg-[#43C705] z-[1]" />
                        <h6 className="font-bold font-inherit text-inherit leading-normal">
                        0%
                      </h6>
                    </div>
                    
                    <Link to="" className="">
                      <img
                        className="w-[24px] h-[24px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/upArrowIcon.svg"
                      />
                    </Link>
                  </div>
                  {/* Right hand side ends */}
                </div>


                {/* verifications starts */}
                <div
                  className="self-stretch w-[1020px] h-[120px] flex flex-row max-w-full mt-[20px] gap-[40px] lg:gap-[20px] font-manrope items-start justify-start py-0 pr-0 pl-[60px] box-border text-[#1F353C] lg:pl-[30px] lg:box-border mq750:gap-[20px] mq1050:flex-wrap
                "
                >
                  {/* Identity Verification */}
                  <div className="self-stretch w-[490px] h-[120px] max-w-full flex flex-1 flex-col font-inherit items-start justify-start gap-[16px] text-[16px] font-manrope">
                    <div className="self-stretch flex flex-col items-start gap-[8px]">
                      <h6 className="font-inherit font-bold leading-normal text-center">
                        Identity Verification
                      </h6>
                      <p className="self-stretch flex flex-col font-inherit items-start leading-normal">
                        Requirements: Basic information,{" "}
                        <span className="block ">
                          setup wallet, and password
                        </span>
                      </p>
                    </div>
                    <div className="rounded-full bg-[#3D6470] bg-[100%] gap-[10px] text-[#FFFFFF] items-center font-manrope justify-center w-[200px] h-[30px] whitespace-nowrap cursor-pointer flex flex-1 px-s py-[4px]">
                      <Link to="/DashProgress" className="" target="">
                        <p className="relative font-inherit text-base text-center">
                          Verify My Identity
                        </p>
                      </Link>
                    </div>
                  </div>
                  {/* Identity Verification ends*/}

                  {/* Address Verification starts*/}
                  <div className="self-stretch w-[490px] h-[120px] max-w-full flex flex-1 flex-col items-start justify-between gap-[auto] font-manrope">
                    <div className="self-stretch text-[#1F353C] flex flex-col items-start gap-[8px] text-[16px] ">
                      <h6 className="relative font-inherit font-bold text-center leading-normal">
                        Address Verification
                      </h6>
                      <p className="self-stretch font-inherit leading-normal text-left">
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
                  {/* Address Verification ends*/}
                </div>
              </div>
                {/* verifications ends */}


              <div className="self-stretch flex flex-col items-center h-px border-t-[1px] border-solid border-[#D0DFE4] mt-[12px]" />

              {/* Tier 3 starts */}
              <div className="self-stretch w-[1080px] h-[24px] font-inherit flex items-center justify-between max-w-full pb-[20px] box-border mq1050:flex-wrap ">
                  {/* Left hand side */}
                  <div className="max-w-full flex items-center">
                    <p className="flex gap-[12px]">
                      Tier 3:
                      <span className="font-bold text-center">
                        Vehicle Verifier
                      </span>
                    </p>
                  </div>
                  {/* Left hand side ends */}

                  {/* Right hand side starts */}
                  <div className="w-[472px] h-[24px] flex items-center justify-end gap-[40px] max-w-full text-[#1F353C] mq750:flex-wrap mq750:gap-[10px]">
                    <div className="w-[408px] h-[15px] flex items-center gap-[20px] max-w-full relative">
                      <div className="w-[359px] h-[8px] flex flex-1 flex-col items-start gap-[56px] max-w-full rounded-full bg-[#FBFBFB]"/>
                      <div className="absolute h-2 w-2 rounded-full bg-[#43C705] z-[1]" />
                        <h6 className="font-bold font-inherit text-inherit leading-normal">
                        0%
                      </h6>
                    </div>
                    
                    <Link to="" className="">
                      <img
                        className="w-[24px] h-[24px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/downArrowIcon.svg"
                      />
                    </Link>
                  </div>
                  {/* Right hand side ends */}
                </div>
              {/* Tier 3 ends */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
