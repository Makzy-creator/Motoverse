import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testmonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className="self-stretch bg-green-100 overflow-hidden flex flex-col items-start justify-start py-[120px] px-[122.5px] box-border gap-[51px] max-w-full text-left text-20xl text-green-900 font-karla mq800:gap-[25px] mq800:py-[78px] mq800:px-[30px] mq800:box-border mq1350:pl-[61px] mq1350:pr-[61px] mq1350:box-border">
            <h1 className="m-0 w-[954px] relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                What people are saying
            </h1>
            <div className="ml-[-358.5px] w-[1795px] h-[420px] flex flex-col items-center justify-start gap-[20px] max-w-[150%] shrink-0 text-base">
                <div className="slider-container w-[1442px] flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] max-w-full">
                <Slider {...settings}> 
                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border max-w-full">
                        <div className="w-[292px] relative inline-block">
                            Selling my car used to be a headache, but not anymore. The
                            verification checks reassured me, and handling the paperwork was a
                            breeze with their help.
                        </div>
                        <div className="w-[68px] h-[19px] relative text-blue-700 inline-block">
                            Ana, Peru
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border max-w-full">
                        <div className="w-[292px] relative inline-block">
                            I was skeptical about selling my car online, but this platform
                            made everything so transparent and easy. The verification process
                            gave me confidence, and I actually got a better price than I
                            expected!
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[91px]">
                            Maria, Brazil
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border max-w-full">
                        <div className="w-[292px] relative inline-block">
                            The step-by-step guidance was perfect. I uploaded my car, set the
                            price, and the escrow service made the transaction completely
                            secure. I highly recommend.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[125px]">
                            Carlos, Argentina
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border max-w-full">
                        <div className="w-[292px] relative inline-block">
                            From verifying my car to finalizing the sale, every step was clear
                            and straightforward. I felt supported and safe throughout the
                            process.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[82px]">
                            Sofia, Chile
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border max-w-full">
                        <div className="w-[292px] relative inline-block">
                            Incredible service! The valuation was fair, and I loved how I
                            could track each stage of the sale. The escrow system brought
                            peace of mind to both me and the buyer.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[112px]">
                            Juan, Colombia
                        </div>
                    </div>
                </Slider>
                </div>

                {/* second div */}
                <div className="w-[1442px] flex-1 overflow-hidden flex flex-row items-start justify-start gap-[20px] max-w-full">

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border">
                        <div className="w-[292px] relative inline-block">
                            Incredible service! The valuation was fair, and I loved how I
                            could track each stage of the sale. The escrow system brought
                            peace of mind to both me and the buyer.
                        </div>
                        <div className="w-28 relative text-blue-700 inline-block">
                            Juan, Colombia
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border">
                        <div className="w-[292px] relative inline-block">
                            Incredible service! The valuation was fair, and I loved how I
                            could track each stage of the sale. The escrow system brought
                            peace of mind to both me and the buyer.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[112px]">
                            Juan, Colombia
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border">
                        <div className="w-[292px] relative inline-block">
                            This platform transformed the way I think about selling cars. Its
                            efficient, secure, and transparent. Plus, the support team was
                            there whenever I had questions.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[99px]">
                            Luis, Uruguay
                        </div>
                    </div>

                    <div className="self-stretch w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between p-5 box-border">
                        <div className="w-[292px] relative inline-block">
                            This platform transformed the way I think about selling cars. Its
                            efficient, secure, and transparent. Plus, the support team was
                            there whenever I had questions.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[99px]">
                            Luis, Uruguay
                        </div>
                    </div>

                    <div className="self-stretch w-[110px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-start justify-between py-s pr-0 pl-s box-border">
                        <div className="w-[292px] relative inline-block">
                            Selling my car used to be a headache, but not anymore. The
                            verification checks reassured me, and handling the paperwork was a
                            breeze with their help.
                        </div>
                        <div className="relative text-blue-700 inline-block min-w-[68px]">
                            Ana, Peru
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testmonials