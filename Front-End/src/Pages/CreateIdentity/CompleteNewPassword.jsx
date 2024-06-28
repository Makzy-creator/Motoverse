import Navbar from "../../Components/LandingPage/Navbar";
import PortalPopup from "../../Components/PortalPopup";
import Frame from "../../Components/Login";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState, useCallback } from "react";

const CompleteNewPassword = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/CreateNewPassword");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/GeneralRegInfo");
  }, [navigate]);
  return (
    <>
      <div className="w-[1440px] h-[1024px] max-w-full bg-[#F3F3F6] bg-100%">
        <Navbar />
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[43px] max-w-full text-center font-manrope text-20xl text-green-900 font-text mq675:gap-[21px]">
          <div className="w-[1189px] flex flex-row items-start justify-center pt-[43px] pb-0 px-5 box-border max-w-full">
            <div className="w-[585px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[60px] max-w-full  mq675:gap-[30px]">
              {/* Progress bar starts */}
              <div className="self-stretch h-3 rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
                <div className="self-stretch w-[585px] relative rounded-full bg-gainsboro hidden max-w-full" />
                <div className="self-stretch w-[390px] relative rounded-full bg-[#4D28FF] bg-100% max-w-full z-[1]" />
              </div>
              {/* progress bar ends */}

              {/* main section starts */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] cursor-pointer">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq750:text-12xl mq750:leading-[37px]">
                    Set Identity Password
                  </h1>
                </div>
                <div className="self-stretch h-11 relative text-base inline-block">
                  <p className="m-0">{`You need a secure password for every Identity. `}</p>
                  <p className="m-0">
                    A strong password looks like this: House 12!small DOGS
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start max-w-full text-left text-base mq675:gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                    <b className="self-stretch relative">Name</b>
                  </div>
                  <div className="self-stretch w-[585px] rounded-xl bg-[#E7E7F1] bg-100% flex flex-row flex-wrap items-start justify-start py-3 pr-6 pl-3 box-border gap-[10px] max-w-full text-grey-500">
                    <Form className="flex flex-row items-center justify-end w-[585px]">
                      <div className="relative w-full">
                        <input
                          type="password"
                          placeholder="................................."
                          className=" whitespace-pre-wrap w-full outline-none border-none bg-transparent"
                          name="password"
                          id=""
                        />
                      </div>
                      <div className="">
                        <img
                          className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/images/Eye.svg"
                          loading="lazy"
                        />
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              {/* Format to create a strong password start */}
              <div className="w-[585px] h-[184px] flex flex-col items-start justify-start  max-w-full">
                <div className="w-[585px] text-[16px] flex font-inherit items-start justify-start pb-[20px]">
                  <p className="self-stretch relative font-bold">
                    To create the password use:
                  </p>
                </div>
                <div className="flex flex-col flex-1 gap-[12px] items-start justify-start w-[595px] ">
                  <div className="text-green-400 flex flex-row items-start justify-start gap-[10px]">
                    {/* <input type="radio" className="bg-[#43C705] w-[22px] h-[22px] p-[10px] " /> */}
                    <img src="/images/Checkmark.svg" loading="lazy" alt="" />
                    <label className="text-[16px] max-w-full">
                      uppercase and lowercase letters
                    </label>
                  </div>

                  <div className="text-green-400 flex flex-row items-start justify-start gap-[10px] ">
                    {/* <input type="radio" className="w-[22px] h-[22px] p-[10px]" /> */}
                    <img src="/images/Checkmark.svg" loading="lazy" alt="" />
                    <label className="text-[16px] max-w-full">
                      punctuation or special characters
                    </label>
                  </div>
                  <div className="text-green-400 flex flex-row items-start justify-start gap-[10px]">
                    {/* <input type="radio" className="w-[22px] h-[22px] p-[10px]" /> */}
                    <img src="/images/Checkmark.svg" loading="lazy" alt="" />
                    <label className="text-[16px] max-w-full">
                      12 characters minimum
                    </label>
                  </div>
                  <div className="text-green-400 flex flex-row items-start justify-start gap-[10px] ">
                    {/* <input type="radio" className="w-[22px] h-[22px] p-[10px]" /> */}
                    <img src="/images/Checkmark.svg" loading="lazy" alt="" />
                    <label className="text-[16px] max-w-full">numbers</label>
                  </div>
                  <div className="text-green-400 flex flex-row items-start justify-start gap-[10px] ">
                    {/* <input type="radio" className="w-[22px] h-[22px] p-[10px]" /> */}
                    <img src="/images/Checkmark.svg" loading="lazy" alt="" />
                    <label className="text-[16px] max-w-full">
                      {`don't use our example`}
                    </label>
                  </div>
                </div>
              </div>
              {/* Format to create a strong password ends */}
            </div>

            {/* main section ends */}
          </div>

          <footer className="bg-[#F3F3F6] self-stretch flex flex-row items-start justify-between mt-[298px] px-[124px] py-[20px] gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
            <div
              className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
              onClick={onFrameContainerClick1}
            >
              <Link to="/CreateNewpassword" className="" target="blanc">
                <p className="relative inline-block min-w-[52px]">Cancel</p>
              </Link>
            </div>

            <div
              className="rounded-full bg-[#3D6470] bg-[100%] text-white flex text-center items-center justify-center py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap"
              onClick={onFrameContainerClick}
            >
              <Link to="/GeneralRegInfo" className="" target="blanc">
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

export default CompleteNewPassword;
