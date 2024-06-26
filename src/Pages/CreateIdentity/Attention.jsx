import Navbar from "../../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";



const Attention = () => {
    const navigate = useNavigate();

    const onFrameContainer1Click = useCallback(() => {
        navigate("/BackupPhrase");
    }, [navigate]);
    return (
        <div>
            <Navbar />
            <div className="w-[1200px] flex flex-col items-start pt-[43px] justify-start gap-[43px] max-w-full font-manrope text-center text-20xl text-green-900 font-text mq675:gap-[21px]">

                {/* progress line starts */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-xl text-black font-text mq750:gap-[21px]">
                    <div className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                        <div className="w-[585px] rounded-full bg-gainsboro flex flex-row items-start justify-start gap-[56px] max-w-full">
                            <div className="self-stretch w-[585px] relative rounded-4xl bg-gainsboro hidden max-w-full" />
                            <div className="h-3 w-[130px] relative rounded-full bg-blue-700 z-[1]" />
                        </div>
                    </div>
                </div>
                {/* progress line ends */}

                <section className="w-[1440px] flex flex-col items-center justify-center max-w-full text-center text-20xl text-green-900 font-text pb-[185px]">
                    <div className="w-[585px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                        <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
                            <img
                                src="/images/Attention.svg"
                                alt=""
                                loading="lazy"
                            />
                            <h1 className="m-0 relative text-inherit leading-[47px] font-bold font-inherit mq1050:text-12xl mq1050:leading-[37px] mq450:text-4xl mq450:leading-[28px]">
                                Attention
                            </h1>
                            <h6 className="text-inherit text-[20px] font-bold">The Next Step Is Very Important!</h6>
                        </div>

                        <div className="self-stretch relative text-base text-green-900 ">
                            <p className="flex flex-col gap-[12px]">{`Please write down your wallet’s phrase and keep it in a safe place. We recommend that you write down your backup phrase with pen and paper. The phrase is required to restore your Identity. `} <span className="block">{`Keep it safe, so you don’t lose your assets`}</span>
                            </p>
                        </div>
                    </div>

                </section>

                <footer className="self-stretch flex flex-row items-start justify-between pt-[18px] px-[124px] pb-s gap-[20px] text-left text-base text-green-900 font-text border-t-[1px] border-solid border-green-200 mq450:pl-5 mq450:pr-5 mq450:box-border mq675:flex-wrap mq675:justify-center mq750:pl-[62px] mq750:pr-[62px] mq750:box-border">

                    <div
                        className="rounded-full  flex flex-row items-start justify-start py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470]  whitespace-nowrap"
                        onClick={onFrameContainer1Click}
                    >
                        <Link
                            to="/Login"
                            className=""
                            target="blanc"
                        >
                            <p className="relative inline-block min-w-[52px]">Cancel</p>
                        </Link>
                    </div>

                    <div
                        className="rounded-full bg-[#3D6470] text-white flex text-center items-center justify-center py-2.5 px-[54.5px] cursor-pointer border-[1px] border-solid border-[#3D6470] whitespace-nowrap"
                        onClick={onFrameContainer1Click}
                    >
                        <Link
                            to="/BackupPhrase"
                            className=""
                            target="blanc"
                        >
                            <p className="relative inline-block min-w-[51px]">Next</p>
                        </Link>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Attention