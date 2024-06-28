import Navbar from "../../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const BackupPhraseNext = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/BackupPhrase3");
  }, [navigate]);
  return (
    <div className="w-[1440px] h-[1024px] max-w-full bg-[#F3F3F6] bg-100%">
      <Navbar />
      <div className="w-[1200px] flex flex-col items-start pt-[43px] justify-start gap-[43px] max-w-full font-manrope text-center text-20xl text-green-900 font-text mq675:gap-[21px]">
        {/* progress line starts */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
          <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
              <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
              <div className="h-3 w-[325px] relative rounded-full bg-[#4D28FF] bg-[100%]bg-blue-700 z-[1]" />
            </div>
          </div>
        </div>
        {/* progress line ends */}
        <section className="w-[1189px] flex flex-row items-start justify-center max-w-full text-center text-20xl text-green-900 font-text">
          <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
                My Backup Phrase
              </h1>
            </div>
            <div className="self-stretch relative text-base">
              Click or hover over each word and write it down. You need to write
              the words in the correct order from 1 to 12.
            </div>
            <div className="w-[585px] h-[268px] rounded-lg border 1px solid border-green-900 my-[60px]">
              {" "}
            </div>

            <div className="self-stretch w-[585px] h-[228px] flex flex-row flex-wrap items-center justify-center gap-[20px] mq750:gap-[20px]">
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100% flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  microphone
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  leopard
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100% flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  garage
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  seal
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100% flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  else
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  expenses
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  team
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100% flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  weekend
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  stick
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  previous
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  finger
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[177px]">
                <div className="self-stretch w-[160px] h-[48px] bg-[#D0DFE4] bg-100%  flex flex-row items-center justify-center p-[10px] px-s box-border min-w-[157.5px] max-w-full text-[16px] text-green-900 font-karla shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] relative rounded-full">
                  tube
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="self-stretch bg-[#F3F3F6] flex flex-row items-start justify-between pt-[18px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">
          <div
            className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
            onClick={onFrameContainer1Click}
          >
            <Link to="/Login" className="" target="blanc">
              <p className="relative inline-block min-w-[52px]">Cancel</p>
            </Link>
          </div>

          <div
            className="rounded-full bg-[#3D6470] text-white flex text-center items-center justify-center py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap"
            onClick={onFrameContainer1Click}
          >
            <Link to="/BackupPhrase3" className="" target="blanc">
              <p className="relative inline-block min-w-[51px]">Next</p>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BackupPhraseNext;
