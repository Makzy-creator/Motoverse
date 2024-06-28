
const Hero2 = () => {
  return (
    <div className="">
      <section className="self-stretch bg-[url(/images/Frame19.svg)] bg-no-repeat bg-contain bg-cover flex flex-col items-start px-6 md:px-12 py-[50px] box-border gap-[10px] w-full font-manrope ">
        <div className="self-stretch flex flex-col gap-[60px] items-start w-full ">
          <h1 className="w-full font-karla text-[27px] tracking-[-0.5px] md:tracking-[-0.78px] leading-[120%] font-bold">
            <p className="">{`Unlock the Future of Car Trading: `}</p>
            <p className=" text-[#4E7FFF]">
              Secure, Transparent, Decentralized
            </p>
          </h1>
            <div className="hide-scroll-bar flex gap-4 items-stretch h-full overflow-x-auto scrollbar-none w-full max-w-full">
              <div className="flex flex-col h-fit items-center rounded-[12px] w-[30%] min-w-[280px] md:min-w-[unset]">
                <img
                  src="/images/illustration.svg"
                  alt=""
                  className="self-stretch w-full aspect-[4/3] rounded-lg object-cover "
                />
                <div className="self-stretch flex flex-col items-start gap-[16px] py-[16px] sm:py-[16px] px-0 sm:px-[16px] ">
                  <h1 className="font-karla leading-[130%] sm:leading-normal sm:tracking-[-0.5px] font-bold text-[20px] text-[#003855]">
                    Unrivaled Security
                  </h1>
                  <p className="self-stretch font-karla text-base sm:text-[18px] font-400 leading-normal sm:leading-[130%] text-[#003855]">
                  Enjoy peace of mind with blockchain-secured purchases, ensuring your investment is protected at every step.
                  </p>
                </div>
              </div>
              {/* card ends */}
            
              {/* card begins */}           
              <div className="h-auto border-r border-[#BEC6FF] hidden md:block"></div>
              <div className="flex flex-col h-fit items-center rounded-[12px] w-[30%] min-w-[280px] md:min-w-[unset]">
                <img
                  src="/images/illustration-1.svg"
                  alt=""
                  className="self-stretch w-full aspect-[4/3] rounded-lg object-cover "
                />
                <div className="self-stretch flex flex-col items-start gap-[16px] py-[16px] md:py-[16px] px-0 md:px-[16px] ">
                  <h1 className="font-karla leading-[130%] md:leading-normal md:tracking-[-0.5px] font-bold text-[20px] text-[#003855]">
                    Transparent Insights
                  </h1>
                  <p className="self-stretch font-karla text-base md:text-[18px] font-400 leading-normal md:leading-[130%] text-[#003855]">
                      Gain access to detailed car histories, authenticity, and peer-to-peer verification, providing transparent insights.
                  </p>
                </div>
              </div>
              {/* card ends */}

              {/* card begins */}
              <div className="h-auto border-r border-[#BEC6FF] hidden md:block"></div>
              <div className="flex flex-col h-fit items-center rounded-[12px] w-[30%] min-w-[280px] md:min-w-[unset]">
                <img
                  src="/images/illustration-2.svg"
                  alt=""
                  className="self-stretch w-full aspect-[4/3] rounded-lg object-cover "
                />
                <div className="self-stretch flex flex-col items-start gap-[16px] py-[16px] md:py-[16px] px-0 md:px-[16px] ">
                  <h1 className="font-karla leading-[130%] md:leading-normal md:tracking-[-0.5px] font-bold text-[20px] text-[#003855]">
                    Empowering Innovation
                  </h1>
                  <p className="self-stretch font-karla text-base md:text-[18px] font-400 leading-normal md:leading-[130%] text-[#003855]">
                    Be at the forefront of a new era in car purchasing, that
                    blockchain technology pioneers trust and transparency like
                    never before.
                  </p>
                </div>
              </div>
              {/* card ends */}
            
            </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
