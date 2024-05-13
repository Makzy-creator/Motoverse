import Navbar from "../../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Success = () => {
    const navigate = useNavigate ();

    const onFrameContainer1Click = useCallback(() => {
        navigate("/Dashboard");
      }, [navigate]);
  return (
    <div>
    <Navbar/>
      <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-center font-manrope justify-center pt-[43px] pb-[120px] pr-[114px] pl-[126px] box-border gap-[60px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border ">

      <section className="w-[482px] h-[461px] mt-[170px] mb-[311px] mr-[503px] ml-[509px] p-[40px] flex flex-col font-manrope items-center justify-center max-w-full text-center text-20xl text-[#1F353C] font-text border-[1px] border-solid border-[#3D6470]">
        <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full pb-[40px]">
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
            <img 
                src="/images/Checkmark.svg" 
                alt="" 
                loading="lazy"
                className="w-[160px] h-[160px] "
            />
            <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
              Success
            </h1>
          </div>
          <div className="self-stretch relative text-base text-green-900">
            <p>{`Congratulations, you have completed your verifier form registration!`}
            </p>
          </div>
        </div>
        

            <div
                className="rounded-full bg-[#3D6470] bg-[100%] gap-[10px] text-white flex flex-col items-center justify-center w-[160px] h-[42px] whitespace-nowrap cursor-pointer"
                onClick={onFrameContainer1Click}
                >
                <Link
                    to="/Dashboard"
                    className=""
                    target="blanc"
                >
                    <p className="relative min-w-[41px] py-2.5 px-[20px] text-base text-center justify-center">Done</p>
                </Link>
                </div>
      </section>
            
    </div>
  </div>
  )
}

export default Success