import CarsPage from "./CarsPage"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Products = () => {
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
        <section className="self-stretch bg-white-50 overflow-hidden flex flex-col items-center justify-start py-[120px] px-[120px] box-border relative gap-[60px] max-w-full text-left text-20xl text-green-900 font-karla mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1125:pt-[78px] mq1125:pb-[78px] mq1125:box-border mq800:gap-[30px]">

            {/* ..................Heading start................. */}
            <div className="w-[1197px] flex flex-row flex-wrap items-start justify-start gap-[71px] max-w-full mq800:gap-[18px] mq1350:gap-[35px]">

                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block min-w-[338px] max-w-full mq450:text-4xl mq450:leading-[28px] mq450:min-w-full mq800:text-12xl mq800:leading-[37px]">
                    Cars for Sales in Mexico
                </h1>

                <Link
                    to="/Login"
                    className="rounded-5 bg-green-400 flex flex-row items-start justify-start py-2.5 px-m whitespace-nowrap text-base text-green-0 font-manrope"
                >
                    <p className="relative inline-block min-w-[41px]">Add your car</p>
                </Link>
            </div>
            {/* ..................Heading End................. */}
            {/* <button
                className="cursor-pointer"
            >
                <img
                    className="w-16 h-16 absolute !m-[0] right-[61px] bottom-[347px] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/images/CaretCircleRight.svg"
                />
            </button> */}


            {/* ..................Car-card start................. */}

            <div className="w-[1197.1px] overflow-hidden flex flex-col items-start justify-start gap-[40px] max-w-full text-base font-manrope mq800:gap-[20px]">

                <div className="slider-container w-[1197.1px] overflow-hidden flex flex-row items-start justify-start gap-[20px] max-w-full">

                        <Slider {...settings}>
                            <div>
                                <CarsPage
                                image14="/images/car1.svg"
                                mapPin="/images/MapPin.svg"
                                location1="Salta"
                                />
                        
                            </div>
                            
                            <div>
                                 <CarsPage
                                    image14="/images/car2.svg"
                                    mapPin="/images/MapPin.svg"
                                    location1="La Plata"
                                    propMinWidth="62px"
                                />
                            </div>
                            
                        <div>
                                <CarsPage
                                    image14="/images/car3.svg"
                                    mapPin="/images/MapPin.svg"
                                    location1="Buenos Aires"
                                    propMinWidth="101px"
                                />
                        </div>
                            
                            <div>
                                <CarsPage
                                image14="/images/car4.svg"
                                mapPin="/images/MapPin.svg"
                                location1="Buenos Aires"
                                propMinWidth="101px"
                                />
                            </div>
                        
                        </Slider>
                    
                </div>
                {/* ..................Car-card ends................. */}

                {/* <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="flex flex-row items-start justify-start gap-[20px]">
                        <div className="h-5 w-5 rounded-5 bg-green-400" />
                        <div className="h-5 w-5 rounded-5 bg-green-200" />
                        <div className="h-5 w-5 rounded-5 bg-green-200" />
                        <div className="h-5 w-5 rounded-5 bg-green-200" />
                    </div>
                </div> */}
            </div>

        </section>

    )
}

export default Products