import CarsPage from "./CarsPage"

const Products = () => {
    return (
        <section className="self-stretch bg-white-50 overflow-hidden flex flex-col items-center justify-start py-[120px] px-5 box-border relative gap-[60px] max-w-full text-left text-20xl text-green-900 font-karla mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq800:gap-[30px]">
            <div className="bg-green-900 w-[1197px] flex flex-row flex-wrap items-start justify-start gap-[71px] max-w-full mq800:gap-[18px] mq1350:gap-[35px] ">

                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block min-w-[338px] max-w-full mq450:text-4xl mq450:leading-[28px] mq450:min-w-full mq800:text-12xl mq800:leading-[37px]">
                    Cars for Sales in Mexico
                </h1>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-base text-green-0 font-manrope">
                    <div className="rounded bg-green-400 flex flex-row items-start justify-start py-2.5 px-m whitespace-nowrap">
                        <button className="relative inline-block min-w-[92px]">
                            Add your car
                        </button>
                    </div>
                </div>
            </div>
            <img
                className="w-16 h-16 absolute !m-[0] right-[61px] bottom-[347px] overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/caretcircleright.svg"
            />
            <div className="w-[1197.1px] flex flex-col items-start justify-start gap-[40px] max-w-full text-base font-manrope mq800:gap-[20px]">
                <div className="w-[1197.1px] overflow-x-auto flex flex-row items-start justify-start gap-[20px] max-w-full">
                    <CarsPage
                        image14="/image-14@2x.png"
                        mapPin="/mappin.svg"
                        location1="Salta"
                    />
                    <CarsPage
                        image14="/image-15@2x.png"
                        mapPin="/mappin-1.svg"
                        location1="La Plata"
                        propMinWidth="62px"
                    />
                    <div className="w-[284.3px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                        <div className="self-stretch h-[223px] relative overflow-hidden shrink-0">
                            <img
                                className="absolute h-[106.32%] w-[106.47%] top-[-3.32%] right-[-3.24%] bottom-[-3%] left-[-3.24%] max-w-full overflow-hidden max-h-full object-cover"
                                loading="lazy"
                                alt=""
                                src="/image-12@2x.png"
                            />
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] z-[1]" />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-s pr-0 pl-s gap-[20px]">
                            <div className="w-[292px] flex flex-col items-start justify-start">
                                <b className="self-stretch relative">Brand - Model</b>
                                <div className="flex flex-row items-start justify-center gap-[4px]">
                                    <div className="relative inline-block min-w-[32px]">Year</div>
                                    <div className="w-[11px] relative inline-block">•</div>
                                    <div className="relative inline-block min-w-[49px]">
                                        Milage
                                    </div>
                                    <div className="w-[11px] relative inline-block">•</div>
                                    <div className="relative inline-block min-w-[36px]">Gear</div>
                                </div>
                            </div>
                            <div className="w-[292px] flex flex-col items-start justify-start">
                                <b className="self-stretch relative">25,093 USDC</b>
                                <div className="relative mt-[-1px]">From 2,590 USDC/month</div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <img className="h-8 w-8 relative overflow-hidden shrink-0"
                                    src="/mappin-2.svg" alt="" />
                                <b className="relative inline-block min-w-[101px]">
                                    Buenos Aires
                                </b>
                            </div>
                        </div>
                    </div>
                    <CarsPage
                        image14="/image-13@2x.png"
                        mapPin="/mappin-3.svg"
                        location1="Buenos Aires"
                        propMinWidth="101px"
                    />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="flex flex-row items-start justify-start gap-[20px]">
                        <div className="h-5 w-5 rounded bg-green-400" />
                        <div className="h-5 w-5 rounded bg-green-200" />
                        <div className="h-5 w-5 rounded bg-green-200" />
                        <div className="h-5 w-5 rounded bg-green-200" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Products