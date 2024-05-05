import Card from "./Card";

const Hero2 = () => {
  return (

    <div className="">
    <section className="bg-[url(/images/Frame19.svg)] bg-no-repeat bg-contain bg-cover items-center md:flex flex-row p-[50px] justify-start box-border relative gap-[60px] max-w-full text-left text-[39px] text-green-900 font-manrope mq450:gap-[15px] mq450:py-[51px] mq450:px-5 mq450:box-border mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq800:gap-[30px] mq800:pl-[60px] mq800:pr-[60px] mq800:box-border">
        <div className="flex flex-col gap-[60px]">
            <h1 className=" relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit inline-block w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                <p className="">{`Unlock the Future of Car Trading: `}</p>
                <p className=" text-green-400">
                    Secure, Transparent, Decentralized
                </p>
            </h1>
            <div className="flex flex-col text-center justify-between gap-[20px] max-w-full text-6xl mq800:gap-[21px] mq1350:flex-wrap h-[447px] w-[1202px] outline-none border-none">
                <Card
                    imageillustration="/images/illustration.svg"
                    secureTransactions="Unrivaled Security"
                    enjoyPeaceOfMindWithBlock="Experience unparalleled peace of mind with blockchain-secured transactions, ensuring the safety of your journey at every stage."
                /> 
                 <img className="" src="images/Line1.svg" alt="line" />
                <div className="md:block">
                    <Card
                        imageillustration="/images/illustration-1.svg"
                        secureTransactions="Transparent Insights"
                        enjoyPeaceOfMindWithBlock="Gain access to detailed car histories, authenticity, and peer-to-peer verification, providing transparent insights."
                    />
                </div>
                <img className="" src="images/Line1.svg" alt="line" />
                <div className="md:block border-bottom-red">
                    <Card
                        imageillustration="/images/illustration-2.svg"
                        secureTransactions="Empowering Innovation"
                        enjoyPeaceOfMindWithBlock="Be at the forefront of a new era in car purchasing, that blockchain technology pioneers trust and transparency like never before."
                    />
                </div>
            </div>
        </div>
    </section>
</div>

  );
};

export default Hero2;
