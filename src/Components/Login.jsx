import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Buyer from "../Pages/Buyer";

const Frame = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Buyer" to the project
    <Buyer />
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/Home");
  }, [navigate]);

  return (
    <div className="w-[585px] rounded-2xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] leading-[normal] tracking-[normal] max-w-full max-h-full overflow-auto mq293:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start opacity-[0] max-w-full">
          <div className="h-3 w-[85px] relative rounded-4xl bg-blue-700" />
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-20xl text-green-900 font-text">
        <div className="w-[400px] flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch h-[300px] relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-aliceblue" />
            <img
              className="absolute h-[123.8%] w-[92.85%] top-[-11.9%] right-[-0.1%] bottom-[-11.9%] left-[7.25%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/key@2x.png"
            />
            <img
              className="absolute h-[51.33%] w-[38.5%] top-[24.33%] right-[32.5%] bottom-[24.33%] left-[29%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/name-tag@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit inline-block min-w-[105px]">
              Login
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-[48.5px] text-base mq399:pl-5 mq399:pr-5 mq399:box-border">
            <div className="flex-1 relative">
              Add your identity in order to access our feature and enable to buy
              and sell vehicles in our marketplace.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-base text-white font-text">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div
            className="rounded-l bg-darkslategray flex flex-row items-start justify-start py-2.5 px-[50px] whitespace-nowrap cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <div className="relative inline-block min-w-[111px]">
              Create Identity
            </div>
          </div>
          <div
            className="rounded-l flex flex-row items-start justify-start py-2 px-[19px] whitespace-nowrap cursor-pointer text-green-900 border-[1px] border-solid border-darkslategray"
            onClick={onFrameContainer1Click}
          >
            <div className="relative">Import Existing Identity</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
