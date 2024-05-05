import { useMemo } from "react";


const About = ({
    propTop,
    propLeft
}) => {
    const threeD = useMemo(() => {
        return {
          top: propTop,
          left: propLeft,
        };
      }, [propTop, propLeft]);

    return (
        <section className="self-stretch bg-green-100 bg-[url(/images/Group30.svg)] bg-contain bg-cover overflow-hidden flex flex-col items-center justify-start py-[120px] px-5 box-border relative gap-[40px] max-w-full text-left text-20xl text-green-900 mq800:gap-[20px] mq800:pt-[51px] mq800:pb-[51px] mq800:box-border mq1350:pt-[78px] mq1350:pb-[78px] mq1350:box-border">

            {/* -----------------Heading---------------------  */}
            <div className="m-0 w-[1202px] h-[141px] self-stretch relative text-inherit tracking-[-0.02em] font-manrope font-regular leading-[47px] mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[120%] pb-2 font-bold font-inherit text-green-900 inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                    Our Technology
                </h1>
                <h1 className="items-start justify-start relative leading-[120%] gap-[60px_56px] max-w-full z-[2] text-blue-700 font-bold">
                    Unleashing the potential of <span className="block"> Web3 in the car industry</span>
                </h1>
            </div>
            {/* -----------------------Heading ends -------------------*/}

            {/*------------------- Partner networks starts---------------- */}
            <div className="w-[1202px] h-[1034px] flex flex-row flex-wrap items-start justify-start relative gap-[60px_56px] max-w-full z-[2] text-blue-700 font-karla">
                <div className="flex-1 w-[571px] h-[448px] !m-[0] absolute top-[0px] left-[0px] [backdrop-filter:blur(14.7px)] rounded-xl overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full">
                     <img
                        className="w-[223px] h-[223px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/kilt.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-s box-border gap-[20px] max-w-full">
                        <h1 className=" m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Unique Network
                        </h1>
                        <p className="w-full relative text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            Enjoy peace of mind with blockchain-secured purchases, ensuring
                            your investment is protected at every step.
                        </p>
                    </div>
                </div>

                <div
                    className="flex-1 !m-[0] w-[571px] h-[500px] absolute top-[-5px] left-[550px] [backdrop-filter:blur(14.7px)] rounded-xl overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full text-inherit text-blue-700 font-inherit"
                    style={threeD}
                >
                     <img
                        className="w-[223px] h-[223px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/tansi.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start pt-[] px-3 pb-s box-border gap-[20px] max-w-full">
                        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Polkadot
                        </h1>
                        <div className="w-full relative h-[217px] text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            {`We harness Polkadot's groundbreaking technology to fortify our appchain, ensuring that your data, and your vehicle's history, are shielded by next-generation security. Sleep easy knowing your automotive assets are protected.`}
                        </div>
                    </div>
                </div>


                <div
                    className="flex-1 !m-[0] w-[571px] h-[500px] absolute top-[500px] left-[0px] [backdrop-filter:blur(14.7px)] rounded-xl overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full text-inherit text-blue-700 font-inherit" 
                >
                    
                     <img
                        className="w-[223px] h-[223px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/polkadot.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start pt-[] px-3 pb-s box-border gap-[20px] max-w-full">
                        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Tanssi Network
                        </h1>
                        <p className="w-full relative h-[217px] text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            {`Tanssi, our powerful connector, links us directly to Polkadot's ecosystem, allowing us to streamline operations and concentrate on delivering exceptional user experiences.`}
                        </p>
                    </div>
                </div>

            
                <div
                    className="flex-1 !m-[0] w-[571px] h-[500px] absolute top-[500px] left-[550px] [backdrop-filter:blur(14.7px)] rounded-xl overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] min-w-[460px] max-w-full text-inherit text-blue-700 font-inherit"
                    style={threeD}
                >
                     <img
                        className="w-[223px] h-[223px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/images/uniquenetwork.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start pt-[40px] px-3 pb-s box-border gap-[20px] max-w-full">
                        <h1 className="m-0 w-[511px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                            Kilt
                        </h1>
                        <div className="w-full relative h-[217px] text-xl leading-[130%] text-green-900 inline-block max-w-[500px] mq450:text-base mq450:leading-[21px] mq800:max-w-full">
                            Our platform utilizes Kilt to provide you with decentralized
                            identities, putting the power of privacy and verification back
                            into your hands for buyer, seller, and verifier.
                        </div>
                    </div>
                </div> 
            </div>

            {/*---------------- Partner networks ends----------- */}

        </section>

    )
}

export default About