import FrameComponent1 from "../../Components/FrameComponent1";
import FrameComponent from "../../Components/FrameComponent";
import Navbar from "../../Components/LandingPage/Navbar";
import { Link, useNavigate} from "react-router-dom";
import { useState, useCallback } from "react";
import PortalPopup from "../../Components/PortalPopup";
import Frame from "../../Components/Login";


const Home = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/Password");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/Login");
  }, [navigate]);
  return (
    <>
    <div className="">
      <Navbar/>
        <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-start justify-start pt-[43px] pb-[120px] pr-[114px] pl-[126px] box-border gap-[60px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[30px] mq750:pl-[63px] mq750:pr-[57px] mq750:box-border">
        <FrameComponent1 />
        <section className="w-[1189px] flex flex-row items-start justify-center max-w-full text-center text-20xl text-green-900 font-text">
          <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
                Import an Identity
              </h1>
            </div>
            <div className="self-stretch relative text-base">
              To import a Motoverse Identity, you will need your backup phrase
              consisting of 12 words and your passoword.
            </div>
          </div>
        </section>
        <FrameComponent />

       
      </div>
      <footer className="self-stretch bg-white-50 flex flex-row items-start justify-between pt-[20px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
            <div
              className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
              onClick={onFrameContainerClick1}
            >
              <Link to="/Login" className="" target="blanc">
                <p className="relative inline-block min-w-[52px]">Cancel</p>
              </Link>
            </div>

            <div
              className="rounded-full bg-[#3D6470] flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap text-white text-center"
              onClick={onFrameContainerClick}
            >
              <Link to="/Password" className="" target="blanc">
                <p className="relative inline-block min-w-[51px]">Next</p>
              </Link>
            </div>
          </footer>
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

export default Home;
