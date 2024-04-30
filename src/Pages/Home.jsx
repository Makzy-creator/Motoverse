import FrameComponent1 from "../Components/FrameComponent1";
import FrameComponent from "../Components/FrameComponent";

const Home = () => {
  return (
    <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-start justify-start pt-10 pb-[276px] pr-[114px] pl-[126px] box-border gap-[60px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">
      <FrameComponent1 />
      <section className="w-[1189px] flex flex-row items-start justify-center max-w-full text-center text-20xl text-green-900 font-text">
        <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
              Import an Identity
            </h1>
          </div>
          <div className="self-stretch relative text-base">
            To import a Rotam Identity, you will need your backup phrase
            consisting of 12 words and your passoword.
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Home;
