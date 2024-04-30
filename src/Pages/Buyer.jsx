import { useCallback } from "react";
import FrameComponent2 from "../Components/FrameComponent2";
import { useNavigate } from "react-router-dom";

const Buyer = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-0 box-border gap-[466px] leading-[normal] tracking-[normal] mq450:gap-[116px] mq750:gap-[233px]">
      <section className="w-[1428px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <FrameComponent2 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-between pt-[18px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
        <div
          className="rounded-l flex flex-row items-start justify-start py-2 px-[53px] cursor-pointer border-[1px] border-solid border-darkslategray"
          onClick={onFrameContainerClick}
        >
          <div className="relative inline-block min-w-[52px]">Cancel</div>
        </div>
        <div className="rounded-l bg-green-100 flex flex-row items-start justify-start py-2.5 px-[54.5px]">
          <div className="relative inline-block min-w-[51px]">Unlock</div>
        </div>
      </section>
    </div>
  );
};

export default Buyer;
