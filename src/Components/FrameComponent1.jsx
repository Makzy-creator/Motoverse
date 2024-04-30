import { useState, useCallback } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Frame from "./Login";
import PortalPopup from "./PortalPopup";

const FrameComponent1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
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
              <div className="flex flex-row items-start justify-start gap-[20px] lg:hidden">
                <div className="relative inline-block min-w-[57px]">About</div>
                <div className="relative inline-block min-w-[108px]">
                  Technology
                </div>
              </div>
            </div>
          </div>
          <div className="w-[394px] flex flex-row items-center justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
              <Form.Select className="font-text text-xl text-black" />
              <Form.Select className="font-text text-xl text-black" />
            </div>
            <button
              className="cursor-pointer [border:none] py-2.5 px-[39.5px] bg-darkslategray rounded-l flex flex-row items-center justify-center"
              onClick={openFrame}
            >
              <div className="relative text-base font-text text-white text-left inline-block min-w-[41px]">
                Login
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[585px] rounded-4xl bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
            <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
            <div className="h-3 w-[195px] relative rounded-4xl bg-blue-700 z-[1]" />
          </div>
        </div>
      </header>
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

export default FrameComponent1;
