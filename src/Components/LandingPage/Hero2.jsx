import Card from "./Card";

const Hero2 = () => {
    return (
        <>
            <section className="bg-green-100 overflow-hidden flex flex-col items-start justify-start p-[120px] box-border relative gap-[60px] max-w-full text-left text-20xl text-green-900 font-karla mq450:gap-[15px] mq450:py-[51px] mq450:px-5 mq450:box-border mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq800:gap-[30px] mq800:pl-[60px] mq800:pr-[60px] mq800:box-border">
                <h1 className="m-0 w-[954px] relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                    <p className="m-0">{`Unlock the Future of Car Trading: `}</p>
                    <p className="m-0 text-green-400">Secure, Transparent, Decentralized</p>
                </h1>
                <div className="flex flex-row items-start justify-start gap-[42.8px] max-w-full text-6xl mq800:gap-[21px] mq1350:flex-wrap">
                    <Card
                        imageillustration="/imageillustration.svg"
                        secureTransactions="Unrivaled Security"
                        enjoyPeaceOfMindWithBlock="Experience unparalleled peace of mind with blockchain-secured transactions, ensuring the safety of your journey at every stage."
                    />
                    <div className="h-[448px] w-px relative box-border border-r-[1px] border-solid border-green-200 mq1350:w-full mq1350:h-px" />
                    <div className="w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
                        <div className="self-stretch h-[254px] relative">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-green-200" />
                            <img
                                className="absolute h-[86.77%] w-[66.41%] top-[0%] right-[12.01%] bottom-[13.23%] left-[21.57%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                                alt=""
                                src="/levitating-glass-and-gradient-spheres@2x.png"
                            />
                            <img
                                className="absolute h-[49.02%] w-[36.82%] top-[47.17%] right-[31.11%] bottom-[3.82%] left-[32.07%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
                                loading="lazy"
                                alt=""
                                src="/glass-sphere@2x.png"
                            />
                            <img
                                className="absolute h-[47.72%] w-[34.61%] top-[20.67%] right-[58.63%] bottom-[31.61%] left-[6.76%] max-w-full overflow-hidden max-h-full object-contain z-[3]"
                                alt=""
                                src="/glass-spheres@2x.png"
                            />
                            <div className="absolute h-[65.54%] w-full top-[0%] right-[0%] bottom-[34.46%] left-[0%] shadow-[0px_26px_17.9px_rgba(0,_0,_0,_0.05)] [backdrop-filter:blur(2.3px)] rounded-[50%] bg-gainsboro box-border border-[0px] border-solid border-whitesmoke-200" />
                            <div className="absolute h-[36.84%] w-[9.45%] top-[63.16%] right-[45.28%] bottom-[0%] left-[45.28%] bg-whitesmoke-200 z-[1]" />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px]">
                    <Card
                        imageillustration="/imageillustration.svg"
                        secureTransactions="Transparent Insights"
                        enjoyPeaceOfMindWithBlock="Gain access to detailed car histories, authenticity, and
                        peer-to-peer verification, providing transparent insights."
                    />
                    </div>
                    <div className="h-[448px] w-px relative box-border border-r-[1px] border-solid border-green-200 mq1350:w-full mq1350:h-px" />
                    <Card
                        imageillustration="/imageillustration-1.svg"
                        secureTransactions="Empowering Innovation"
                        enjoyPeaceOfMindWithBlock="Be at the forefront of a new era in car purchasing, that blockchain technology pioneers trust and transparency like never before."
                    />
                </div>
                <div className="w-full h-[1252.8px] absolute !m-[0] top-[-423px] right-[0px] left-[0px]">
                    <img
                        className="absolute top-[0px] left-[-324px] w-[2294.6px] h-[1252.8px] object-contain z-[1]"
                        alt=""
                        src="/ellipse-1.svg"
                    />
                    <img
                        className="absolute top-[148.2px] left-[-189.2px] w-[1993.1px] h-[1088.7px] object-contain z-[2]"
                        alt=""
                        src="/ellipse-2.svg"
                    />
                </div>
            </section>
        </>
    );
}

export default Hero2
