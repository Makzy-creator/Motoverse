import { useMemo } from "react";

const Page3 = ({
  rectangle42,
  uniqueNetwork,
  enjoyPeaceOfMindWithBlock,
  propTop,
  propLeft,
}) => {
  const threeD = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="flex-1 !m-[0] absolute top-[0px] left-[631px] [backdrop-filter:blur(14.7px)] rounded-xl flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full text-left text-20xl text-blue-700 font-karla"
      style={threeD}
    >
      <img
        className="w-[223px] h-[223px] relative object-contain"
        loading="lazy"
        alt=""
        src="../../assets/Rectangle 42.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-s box-border gap-[20px] max-w-full">
        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
          {uniqueNetwork}
        </h1>
        <div className="w-full relative text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
          {enjoyPeaceOfMindWithBlock}
        </div>
      </div>
    </div>
  );
};

export default Page3;
