import { useState, useCallback } from "react";
import Frame from "../Components/Login";
import PortalPopup from "../Components/PortalPopup";
import { useNavigate } from "react-router-dom";

const Buyer1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/buyer1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-0 box-border gap-[466px] leading-[normal] tracking-[normal] mq450:gap-[116px] mq750:gap-[233px]">
        <section className="w-[1428px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-20xl text-green-900 font-text">
          <div className="w-[1200px] flex flex-col items-start justify-start gap-[43px] max-w-full mq675:gap-[21px]">
            <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-xl text-black font-text">
              <div className="w-[389.7px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[60px] mq450:gap-[30px]">
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
                  <div className="flex flex-row items-start justify-start gap-[20px] mq750:hidden">
                    <div className="relative inline-block min-w-[57px]">
                      About
                    </div>
                    <div className="relative inline-block min-w-[108px]">
                      Technology
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[394px] flex flex-row items-center justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative inline-block min-w-[76px]">
                        Country
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
                      <img
                        className="w-4 h-2 relative"
                        alt=""
                        src="/vector-15.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative inline-block min-w-[54px]">
                        USDC
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
                      <img
                        className="w-4 h-2 relative"
                        alt=""
                        src="/vector-15.svg"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-l bg-darkslategray flex flex-row items-center justify-center py-2.5 px-[39.5px] cursor-pointer text-left text-base text-white"
                  onClick={openFrame}
                >
                  <div className="relative inline-block min-w-[41px]">
                    Login
                  </div>
                </div>
              </div>
            </header>
            <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div
                className="w-[585px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[60px] max-w-full cursor-pointer mq675:gap-[30px]"
                onClick={onFrameContainerClick}
              >
                <div className="self-stretch h-3 rounded-4xl bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
                  <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
                  <div className="self-stretch w-[390px] relative rounded-4xl bg-blue-700 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq750:text-12xl mq750:leading-[37px]">
                      Enter your Pasword
                    </h1>
                  </div>
                  <div className="self-stretch h-11 relative text-base inline-block opacity-[0]">
                    <p className="m-0">{`You need a secure password for every Identity. `}</p>
                    <p className="m-0">
                      A strong password looks like this: House 12! small DOGS
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start max-w-full text-left text-base mq675:gap-[20px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                      <b className="self-stretch relative">Password</b>
                    </div>
                    <div className="self-stretch rounded-xl bg-green-10 flex flex-row flex-wrap items-start justify-start py-3 pr-6 pl-3 box-border gap-[10px] max-w-full text-grey-500">
                      <div className="flex-1 relative inline-block min-w-[195px] max-w-full">
                        ••••••••••••••••••••••••
                      </div>
                      <div className="flex flex-col items-center justify-center pt-[3.7px] px-0.5 pb-[3.8px] box-border w-6 h-6">
                        <img
                          className="w-[20.6px] h-[16.5px] relative"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="self-stretch flex flex-row items-start justify-between pt-[18px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
          <div
            className="rounded-l flex flex-row items-start justify-start py-2 px-[53px] cursor-pointer border-[1px] border-solid border-darkslategray"
            onClick={onFrameContainer2Click}
          >
            <div className="relative inline-block min-w-[52px]">Cancel</div>
          </div>
          <div className="rounded-l bg-darkslategray flex flex-row items-start justify-start py-2.5 px-[54.5px] text-white">
            <div className="relative inline-block min-w-[51px]">Unlock</div>
          </div>
        </footer>
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

export default Buyer1;
