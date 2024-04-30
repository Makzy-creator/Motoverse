import Page3 from "./Page3"

const About = () => {
    return (
        <section className="self-stretch bg-green-100 overflow-hidden flex flex-col items-center justify-start py-[120px] px-5 box-border relative gap-[40px] max-w-full text-left text-20xl text-green-900 font-karla mq800:gap-[20px] mq800:pt-[51px] mq800:pb-[51px] mq800:box-border mq1350:pt-[78px] mq1350:pb-[78px] mq1350:box-border">
            <div className="w-full h-[783px] absolute !m-[0] right-[0px] bottom-[-153px] left-[0px]">
                <div className="absolute top-[18px] left-[-411px] w-[2176px] h-[765px] flex items-center justify-center">
                    <img
                        className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.362)]"
                        alt=""
                        src="/ellipse-1-1.svg"
                    />
                </div>
                <div className="absolute top-[0px] left-[-268px] w-[1890px] h-[665px] z-[1] flex items-center justify-center">
                    <img
                        className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.417)]"
                        alt=""
                        src="/ellipse-2-1.svg"
                    />
                </div>
            </div>
            <div className="w-[1202px] flex flex-col items-start justify-start max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                    Our Technology
                </h1>
                <h1 className="m-0 w-[567px] relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit text-green-400 inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                    Unleashing the potential of Web3 in the car industry
                </h1>
            </div>
            <div className="w-[1202px] h-[1034px] flex flex-row flex-wrap items-start justify-start relative gap-[60px_56px] max-w-full z-[2] text-blue-700">
                <div className="flex-1 !m-[0] absolute top-[0px] left-[0px] [backdrop-filter:blur(14.7px)] rounded-xl overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full">
                    <div className="w-[223px] h-[223px] relative">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkseagreen hidden" />
                        <img
                            className="absolute h-[77%] w-[98.03%] top-[11.35%] right-[-6.5%] bottom-[11.66%] left-[8.48%] max-w-full overflow-hidden max-h-full object-contain"
                            loading="lazy"
                            alt=""
                            src="/image-19@2x.png"
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-s box-border gap-[20px] max-w-full">
                        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Unique Network
                        </h1>
                        <div className="w-full relative text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            Enjoy peace of mind with blockchain-secured purchases, ensuring
                            your investment is protected at every step.
                        </div>
                    </div>
                </div>
                <Page3
                    rectangle42="/rectangle-42@2x.png"
                    uniqueNetwork="Polkadot"
                    enjoyPeaceOfMindWithBlock="We harness Polkadot's groundbreaking technology to fortify our appchain, ensuring that your data, and your vehicle's history, are shielded by next-generation security. Sleep easy knowing your automotive assets are protected."
                />
                <Page3
                    rectangle42="/rectangle-42-1.svg"
                    uniqueNetwork="Tanssi Network"
                    enjoyPeaceOfMindWithBlock="Tanssi, our powerful connector, links us directly to Polkadot's ecosystem, allowing us to streamline operations and concentrate on delivering exceptional user experiences."
                    propTop="560px"
                    propLeft="0px"
                />

                <div className="flex-1 !m-[0] absolute top-[560px] left-[631px] [backdrop-filter:blur(14.7px)] rounded-xl flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full">
                    <div className="w-[223px] h-[223px] relative flex items-center justify-center">
                        <img
                            className="w-full h-full object-contain absolute left-[-3px] top-[0px] [transform:scale(1.253)]"
                            alt=""
                            src="/rectangle-42-2.svg"
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-s box-border gap-[20px] max-w-full">
                        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Kilt
                        </h1>
                        <div className="w-full relative text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            Our platform utilizes Kilt to provide you with decentralized
                            identities, putting the power of privacy and verification back
                            into your hands for buyer, seller, and verifier.
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About