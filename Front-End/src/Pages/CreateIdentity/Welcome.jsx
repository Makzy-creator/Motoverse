import Navbar from "../../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/Attention");
  }, [navigate]);
  return (
    <div className="w-[1440px] h-[1024px] max-w-full bg-[#F3F3F6]">
      <Navbar />
      <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-center font-manrope justify-center pt-[43px] pb-[120px] pr-[114px] pl-[126px] box-border gap-[60px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">
        {/* progress line starts */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
          <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
              <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
              <div className="h-3 w-[65px] relative rounded-full bg-[#4D28FF] z-[1]" />
            </div>
          </div>
        </div>
        {/* progress line ends */}

        <section className="w-[1189px] flex flex-col font-manrope items-center justify-center max-w-full text-center text-20xl text-green-900 font-text">
          <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
              <img src="/images/Welcome.svg" alt="" loading="lazy" />
              <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
                Welcome
              </h1>
            </div>
            <div className="self-stretch relative text-base text-green-900">
              <p>
                {`You currently don't have any identities. Add your first identity to get started.`}{" "}
                <span className="block">
                  I have read and agreed to the{" "}
                  <a href="" className="text-green-900 underline">
                    Terms & Conditions
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
        <div
          className="rounded-full bg-[#3D6470] bg-[100%] text-white flex flex-col items-center justify-center py-2.5 px-[50px] whitespace-nowrap cursor-pointer"
          onClick={onFrameContainer1Click}
        >
          <Link to="/Attention" className="" target="blanc">
            <p className="relative inline-block min-w-[41px]">
              Create Identity
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
