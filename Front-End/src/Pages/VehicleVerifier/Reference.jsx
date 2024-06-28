import Navbar from "../../Components/LandingPage/Navbar";
// import { Form } from "react-bootstrap";
import { useState, useCallback } from "react";
import PortalPopup from "../../Components/PortalPopup";
import Frame from "../../Components/Login";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";

const Reference = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/Experience");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/Success");
  }, [navigate]);
  return (
    <>
      <div className="w-[1440px] h-[1024px] max-w-full flex flex-col bg-[#F3F3F6]">
        <Navbar />
        <div className="self-stretch relative flex flex-col items-center text-20xl font-manrope justify-center box-border leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">
          <div className="w-[585px] h-[772px] max-w-full mx-[428px] mt-[43px] mb-[45px] items-center justify-center">
            <div className="w-[585px] flex flex-col items-start justify-start box-border max-w-full mq675:gap-[30px]">
              {/* Progress bar starts */}
              <div className="self-stretch h-3 rounded-full bg-[#D9D9D9] flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
                <div className="self-stretch w-[585px] relative rounded-full bg-[#D9D9D9] hidden max-w-full" />
                <div className="self-stretch w-[481px] relative rounded-full bg-[#4D28FF] bg-100% max-w-full z-[1]" />
              </div>
              {/* progress bar ends */}

              {/* main section starts */}
             
              <div className="self-stretch flex flex-row items-start justify-center">
                <h3 className="m-0 relative leading-[47px] pt-[60px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq750:text-12xl mq750:leading-[37px] text-[#000000] ">
                  Other Reference
                </h3>
              </div>
              <div className="pb-[60px] text-center self-stretch relative text-base pt-[12px] text-[#1F353C]">
                <p>
                Add any relevant websites or upload any reviews, testimonials, or feedback from previous clients
                </p>
              </div>

              {/* Form Section */}
              <div className="self-stretch flex flex-col align-middle items-center justify-center w-[585px] h-[193px] max-w-full gap-[40px] mb-[60px]">
                {/* Form starts */}
                <div className="self-stretch flex flex-col items-start justify-start max-w-full w-[585px] gap-[6px] text-left text-base mq675:gap-[20px]">
                  <h5 className="text-green-900 align-top h-[27px]">
                    Websites
                  </h5>
                  <div className="w-[335px] flex flex-col items-start justify-start max-w-full">
                    <b className="self-stretch relative">URL</b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start md:gap-[10px] gap-[15px] max-w-full w-[585px] h-[48px]">
                    <div className="self-stretch rounded-xl bg-[#E7E7F1] bg-100% flex-1 flex flex-row flex-wrap items-center justify-between">
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder=""
                          className="text-[16px] items-center justify-center whitespace-pre-wrap w-full outline-none border-none bg-transparent relative max-w-full py-3 pr-6 pl-3"
                          name="text"
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Form Ends*/}
                <div className="self-stretch flex flex-row items-start justify-between w-[160px] h-[42px] max-w-full">
                  <Button
                    to=""
                    className="rounded-full w-[160px] h-[42px] flex flex-row items-center justify-center py-2.5 px-[20px] cursor-pointer bg-[#3D6470] bg-100% whitespace-nowrap"
                    target=""
                  >
                    <p className="relative text-base text-white">Add Another</p>
                  </Button>
                </div>
              </div>
              {/* Form section ends */}


              {/* Upload document section starts */}
              <p className="text-base text-center justify-center w-[585px] h-[27px] text-[#7CA1AD] font-inherit">Make completing your job application easier by uploading your resume or CV. Upload either DOC, DOCX, HTML, PDF, or TXT file types (5MB max)</p>
            <div className="w-[585px] h-[180px] mb-[40px] mt-[20px] bg-[#E7E7F1] bg-[100%] rounded-lg border-dashed border-2 items-center justify-center border-[#858597] cursor-pointer">
                <div className="self-stretch w-[585px] h-[180px] flex flex-col items-center justify-center gap-[10px] py-3 px-[12px] mq750:gap-[20px] ">
               <img
                  className="cursor-pointer h-6 w-6 relative"
                  alt=""
                  src="/images/Icon.svg"
                  loading="lazy"
                />
               <p className="self-stretch w-[561px] h-[44px] text-base text-center font-inherit text-[#858597]">Drop File here <br />
                or select file</p>
                </div>
            </div>
              {/* upload document section ends */}
            </div>
          </div>

          <footer className="self-stretch flex flex-row items-start justify-between pt-[20px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
            <div
              className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
              onClick={onFrameContainerClick1}
            >
              <Link to="/Experience" className="" target="blanc">
                <p className="relative inline-block min-w-[52px]">Cancel</p>
              </Link>
            </div>

            <div
              className="rounded-full bg-[#3D6470] flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap text-white text-center"
              onClick={onFrameContainerClick}
            >
              <Link to="/Success" className="" target="blanc">
                <p className="relative inline-block min-w-[51px]">Next</p>
              </Link>
            </div>
          </footer>
        </div>
      </div>

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

export default Reference;
