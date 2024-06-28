import Navbar from "../../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";



const Credentials = () => {
    const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/Application");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/Credentials1");
  }, [navigate]);
  return (
    <div className="w-[1440px] h-[1024px] max-w-full bg-[#F3F3F6]">
      <Navbar />
      <div className="self-stretch flex flex-col items-center pt-[43px] px-[114px] justify-start max-w-full font-manrope text-center text-20xl text-green-900 font-text mq675:gap-[21px]">
        {/* progress line starts */}
        <div className="self-stretch flex flex-col items-center justify-center max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
          <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
              <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
              <div className="h-3 w-[184px] relative rounded-full bg-[#4D28FF] bg-[100%] z-[1]" />
            </div>
          </div>
        </div>
        {/* progress line ends */}
        <section className="w-[585px] h-[519px] flex flex-row items-start justify-center max-w-full text-center text-20xl text-[#1F353C] font-text pt-[60px]">
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center">
              <h3 className="m-0 w-[588px] h-[47px] relative text-inherit leading-[47px] tracking-[-1px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px] ">
                Professional Credentials
              </h3>
            </div>
            <div className="pb-[60px] self-stretch relative text-base pt-[12px] text-green-900">
              <p className="">Check for any professional licenses, certificates, or accreditations that demonstrate their expertise in vehicle inspection, blockchain technology, or related fields.</p> 
            </div>

            {/* main section starts */}

            <p className="text-base text-center justify-center w-[585px] h-[27px] text-[#7CA1AD] font-inherit">Make completing your job application easier by uploading your resume or CV. Upload either DOC, DOCX, HTML, PDF, or TXT file types (5MB max)</p>
            <div className="w-[585px] h-[180px] mb-[40px] mt-[20px] bg-[#E7E7F1] bg-[100%] rounded-lg 1px divide-solid border-dashed border-2 border-[#858597] cursor-pointer">
                <div className="self-stretch w-[585px] h-[180px] flex flex-row flex-wrap items-center justify-center gap-[10px] py-3 px-[12px] mq750:gap-[20px] ">
               <img
                  className="cursor-pointer h-6 w-6 relative"
                  alt=""
                  src="/images/Icon.svg"
                  loading="lazy"
                />
               <p className="self-stretch w-[561px] h-[44px] text-base font-inherit items-center justify-center text-[#858597]">Drop File here <br />
                or select file</p>
               
                </div>
            </div>
          </div>
        </section>

        
      </div>
      <footer className="bg-[#F3F3F6] self-stretch flex flex-row items-start justify-between mt-[298px] px-[124px] py-[20px] gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
          <div
            className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
            onClick={onFrameContainer1Click}
          >
            <Link to="/Application" className="" target="blanc">
              <p className="relative inline-block min-w-[52px]">Cancel</p>
            </Link>
          </div>

          <div
            className="rounded-full bg-[#3D6470] bg-[100%] text-white flex text-center items-center justify-center py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap"
            onClick={onFrameContainerClick}
          >
            <Link to="/Credentials1" className="" target="blanc">
              <p className="relative inline-block min-w-[51px]">Next</p>
            </Link>
          </div>
        </footer>
    </div>
  )
}

export default Credentials