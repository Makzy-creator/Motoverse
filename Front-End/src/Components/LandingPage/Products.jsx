// import CarsPage from "./CarsPage";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";

const Products = () => {
  return (
    <section className="self-stretch flex flex-col items-start gap-[40px] sm:gap-[10px] bg-[#ECEDFF] w-full px-6 md:px-12 py-[50px]">
      <div className="self-stretch flex flex-col w-full items-start gap-[40px] sm:gap-[60px] ">
        <div className="block sm:flex justify-between items-center w-full">
          <h1 className="w-full font-karla text-[#003855] text-[27px] tracking-[-0.5px] md:tracking-[-0.78px] leading-[120%] font-bold">
            Cars for Sales in Mexico
          </h1>
          <button
            to="/"
            className="block sm:flex bg-[#4E7FFF] items-center justify-center w-[160px] sm:w-[150px] py-[5px] px-[15px] sm:px-[16px] mt-[16px] sm:m-0 rounded-full text-[#fff] text-base font-manrope font-[400]"
          >
            Add your Car
          </button>
        </div>

        <div className="w-full sm:gap-[16px] self-stretch h-fit flex gap-4 items-stretch overflow-x-scroll hide-scroll-bar scrollbar-none max-w-full">
          <div className="self-stretch flex flex-col w-[230px] sm:w-[250px] items-start rounded-xl box-border shrink-0 overflow-hidden">
            <div>
              <img
                src="/images/car1.svg"
                alt=""
                className=" w-full object-cover "
              />
            </div>

            <div className="self-stretch flex flex-col items-start gap-[20px] bg-[#FFF] p-[16px] ">
              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                Brand - Model
                <p className="font-[400]">Year • Millage • Gear</p>
              </h1>

              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                25,093 USDC
                <p className="font-[400]">From 2,590 USDC/month</p>
              </h1>

              <div className="flex items-center justify-center gap-[8px]">
                <img
                  src="/images/MapPin.svg"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <p className="font-bold text-[16px] font-manrope leading-normal text-[#003855]">
                  Salta
                </p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col w-[230px] sm:w-[250px] items-start rounded-xl box-border shrink-0 overflow-hidden">
            <img
              src="/images/car1.svg"
              alt=""
              className="self-stretch w-full rounded-t-xl object-cover "
            />
            <div className="self-stretch flex flex-col rounded-b-xl items-start gap-[20px] bg-[#FFF] p-[16px] ">
              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                Brand - Model
                <p className="font-[400]">Year • Millage • Gear</p>
              </h1>

              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                25,093 USDC
                <p className="font-[400]">From 2,590 USDC/month</p>
              </h1>

              <div className="flex items-center justify-center gap-[8px]">
                <img
                  src="/images/MapPin.svg"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <p className="font-bold text-[16px] font-manrope leading-normal text-[#003855]">
                  La Plata
                </p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col w-[230px] sm:w-[250px] items-start rounded-xl box-border shrink-0 overflow-hidden">
            <img
              src="/images/car1.svg"
              alt=""
              className="self-stretch w-full rounded-t-xl object-cover "
            />
            <div className="self-stretch flex flex-col rounded-b-xl items-start gap-[20px] bg-[#FFF] p-[16px] ">
              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                Brand - Model
                <p className="font-[400]">Year • Millage • Gear</p>
              </h1>

              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                25,093 USDC
                <p className="font-[400]">From 2,590 USDC/month</p>
              </h1>

              <div className="flex items-center justify-center gap-[8px]">
                <img
                  src="/images/MapPin.svg"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <p className="font-bold text-[16px] font-manrope leading-normal text-[#003855]">
                  Buenos Aires
                </p>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col w-[230px] sm:w-[250px] items-start rounded-xl box-border shrink-0 overflow-hidden">
            <img
              src="/images/car1.svg"
              alt=""
              className="self-stretch w-full rounded-t-xl object-cover "
            />
            <div className="self-stretch flex flex-col rounded-b-xl items-start gap-[20px] bg-[#FFF] p-[16px] ">
              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                Brand - Model
                <p className="font-[400]">Year • Millage • Gear</p>
              </h1>

              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                25,093 USDC
                <p className="font-[400]">From 2,590 USDC/month</p>
              </h1>

              <div className="flex items-center justify-center gap-[8px]">
                <img
                  src="/images/MapPin.svg"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <p className="font-bold text-[16px] font-manrope leading-normal text-[#003855]">
                Buenos Aires
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col w-[230px] sm:w-[250px] items-start rounded-xl box-border shrink-0 overflow-hidden">
            <img
              src="/images/car1.svg"
              alt=""
              className="self-stretch w-full rounded-t-xl object-cover "
            />
            <div className="self-stretch flex flex-col rounded-b-xl items-start gap-[20px] bg-[#FFF] p-[16px] ">
              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                Brand - Model
                <p className="font-[400]">Year • Millage • Gear</p>
              </h1>

              <h1 className="font-manrope leading-normal font-bold text-[16px] text-[#003855]">
                25,093 USDC
                <p className="font-[400]">From 2,590 USDC/month</p>
              </h1>

              <div className="flex items-center justify-center gap-[8px]">
                <img
                  src="/images/MapPin.svg"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <p className="font-bold text-base font-manrope leading-normal text-[#003855]">
                 La Plata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-[1197.1px] overflow-hidden flex flex-col items-start justify-start gap-[40px] max-w-full text-base font-manrope mq800:gap-[20px]">
        <div className="slider-container w-full overflow-hidden">
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
      </div> */}
    </section>
  );
};

export default Products;
