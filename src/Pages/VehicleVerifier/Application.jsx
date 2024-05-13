import Navbar from "../../Components/LandingPage/Navbar";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/VehicleVerifier1");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/Credentials");
  }, [navigate]);
  return (
    <div className="w-[1440px] h-[1024px] max-w-full flex flex-col bg-white-50">
      <Navbar />
      <div className="self-stretch relative  flex flex-col items-center text-20xl font-manrope justify-center box-border leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">
        <div className="w-[585px] h-[491px] max-w-full mx-[428px] mt-[43px] items-center justify-center">
          {/* progress line starts */}
          <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-xl pb-[60px] text-black font-text mq750:gap-[21px]">
            <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
                <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
                <div className="h-3 w-[110px] relative rounded-full  bg-[#4D28FF] bg-[100%] z-[1]" />
              </div>
            </div>
          </div>
          {/* progress line ends */}

          <div className="relative font-bold font-inherit h-[47px] text-center text-inherit leading-[47px] font-manrope mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
            <h3 className="p-[12px]">I want to apply for</h3>
          </div>

          {/* Roles section starts */}

          <div className="self-stretch relative w-[585px] md:w-[800px] h-[544px] md:h-[272px] mt-[60px] mb-[448px] items-center justify-center max-w-full flex md:flex-row flex-col gap-[40px] mq450:gap-[15px] mq450:pl-5 mq450:h-5 mq450:box-border mq750:gap-[30px] mq750:px-[63px] mq750:pr-[57px] mq750:box-border">
            {/* Role 1 */}
            <div className="w-[240px] h-[272px] self-stretch flex flex-col items-center justify-center gap-[8px]">
              <div className="flex items-center w-[24px] h-[24px] p-[10px] max-w-full">
                <input type="radio" />
              </div>
              <div className="self-stretch items-center justify-center w-[240px] h-[240px] max-w-full px-[32px] py-[16px] bg-[#E7E7F1] rounded-2 flex flex-col gap-[10px]">
                <img src="/images/Engine.svg" alt="" loading="lazy" />

                <h3 className="w-[216px] h-[22px] text-center relative text-base leading-[47px] font-inherit mb-[16px] mx-[20px]">
                  Mechanical Verifier
                </h3>
              </div>
            </div>

            {/* Role 2 */}
            <div className="w-[240px] h-[272px] self-stretch flex flex-col items-center justify-center gap-[8px]">
              <div className="flex items-center w-[24px] h-[24px] p-[10px] max-w-full">
                <input type="radio" />
              </div>
              <div className="self-stretch items-center justify-center w-[240px] h-[240px] max-w-full px-[32px] py-[16px] bg-[#E7E7F1] rounded-2 flex flex-col gap-[10px]">
                <img src="/images/Bluecar.svg" alt="" loading="lazy" />

                <h3 className="w-[216px] h-[22px] text-center relative text-base leading-[47px] font-inherit mb-[16px] mx-[20px]">
                  Mechanical Verifier
                </h3>
              </div>
            </div>

            {/* Role 3 */}
            <div className="w-[240px] h-[272px] self-stretch flex flex-col items-center justify-center gap-[8px]">
              <div className="flex items-center w-[24px] h-[24px] p-[10px] max-w-full">
                <input type="radio" />
              </div>
              <div className="self-stretch items-center justify-center w-[240px] h-[240px] max-w-full px-[32px] py-[16px] bg-[#E7E7F1] rounded-2 flex flex-col gap-[10px]">
                <img src="/images/Law.svg" alt="" loading="lazy" />

                <h3 className="w-[216px] h-[22px] text-center relative text-base leading-[47px] font-inherit mb-[16px] mx-[20px]">
                  Mechanical Verifier
                </h3>
              </div>
            </div>
          </div>
          {/* Role section end */}
        </div>

      </div>
      <footer className="self-stretch flex flex-row items-start justify-between mt-[298px] px-[124px] py-[20px] gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
        <div
          className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
          onClick={onFrameContainer1Click}
        >
          <Link to="/VehicleVerifier1" className="" target="blanc">
            <p className="relative inline-block min-w-[52px]">Cancel</p>
          </Link>
        </div>

        <div
          className="rounded-full bg-[#3D6470] bg-[100%] text-white flex text-center items-center justify-center py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap"
          onClick={onFrameContainerClick}
        >
          <Link to="/Credentials" className="" target="blanc">
            <p className="relative inline-block min-w-[51px]">Next</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Application;
