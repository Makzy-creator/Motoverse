import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Navbar from "../../Components/LandingPage/Navbar";

const VehicleVerifier1 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/Application");
  }, [navigate]);
  return (
    <div className="w-[1440px] h-[1024px] max-w-full">
      <Navbar />
      <div className="self-stretch relative bg-white-50 overflow-hidden flex flex-col items-center font-manrope justify-center box-border leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">


        {/* main section starts */}
        <div className="w-[585px] h-[754px] max-w-full mx-[428px] mt-[43px] mb-[145px] items-center justify-center">
          <div className="self-stretch w-full h-[612] max-w-full flex flex-col">
            {/* progress line starts */}
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
              <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
                  <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
                  <div className="h-3 w-[12px] relative rounded-full  bg-[#4D28FF] bg-[100%] z-[1]" />
                </div>
              </div>
            </div>
            {/* progress line ends */}

            <section className="w-[585px] flex flex-col font-manrope mt-[60px] gap-[12px] items-start justify-start max-w-full text-center text-20xl text-[#1F353C] font-text">
              <div className="">
                <div className="self-stretch flex flex-col items-center justify-center px-5 gap-[12px]">
                  <img
                    src="/images/Vehicleverify.svg"
                    alt=""
                    loading="lazy"
                    className="w-[400] h-[300]"
                  />
                  <h3 className="m-0 relative text-inherit leading-[47px] font-bold font-manrope mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
                    Join our dedicated team of DAO verifiers
                  </h3>
                </div>
                <div className="self-stretch relative text-base pt-[12px] w-full h-[122px] font-manrope">
                  <p>
                    {`Ensure each vehicle meets our high standards through detailed inspections and blockchain-backed reporting. Your expertise not only reinforces trust and transparency but also shapes the future of secure, decentralized vehicle transactions.`}{" "}
                    <span className="block pt-[12px] w-full ">
                      I have read and agreed to the{" "}
                      <a href="" className="text-green-900 underline">
                        Terms & Conditions
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="w-[585px] h-[142px] max-w-full flex items-center justify-center pb-[40px] pt-[60px]">
            <div
              className="w-[117px] h-[42px] rounded-full bg-[#3D6470] text-white text-base flex flex-col items-center justify-center whitespace-nowrap cursor-pointer "
              onClick={onFrameContainer1Click}
            >
              <Link to="/Application" className="" target="blanc">
                <p className="relative inline-block">
                 Apply Now
                </p>
              </Link>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default VehicleVerifier1;
