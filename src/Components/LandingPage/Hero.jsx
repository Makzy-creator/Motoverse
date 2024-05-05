import Navbar from "./Navbar";
import Hero2 from "./Hero2";
import About from "./About";
import Products from "./Products";
import HowItWorks from "./HowItWorks";
import Testmonials from "./Testmonials";
import Team from "./Team";
import { Link } from "react-router-dom";




const Hero = () => {
  return (
    <div className="w-full relative bg-white-100 flex flex-col leading-[normal] tracking-[normal]">
      <section className="overflow-y-scroll scrollbar-none self-stretch bg-[url(/images/Group28.svg)] bg-no-repeat bg-cover bg-contain flex flex-col px-0 pt-0 p-[120px] pb-[300px] box-border relative gap-[81px] max-w-full text-left text-[50px] text-green-200 font-Manrope mq450:gap-[20px] mq1125:pb-[301px] mq1125:box-border mq800:gap-[40px] mq800:pb-[196px] mq800:box-border ">
        <Navbar />
        <div className="container flex flex-row align-middle items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="w-[607px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[5] mq800:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit sm:pt-[50px] tracking-[-0.02em] leading-[90%] leading-loose font-medium font-inherit mq450:text-[24px] mq450:leading-[29px] mq800:text-[40px] mq800:leading-[43px]">
                <span className="block lg:leading-[1.5] leading-tight">Explore a World of </span>
                <span className="block leading-tight">Cars Safely on the </span>
                <span className="block leading-tight">Blockchain </span>
              </h1>
              <div className="w-[502px] relative text-xl leading-[130%] text-green-0 inline-block max-w-full mq450:text-base mq450:leading-[21px]">
                <p>
                  Dive into a decentralized shopping experience where every
                  transaction is transparent, every car has a story, and every
                  deal is sealed with trust.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-base text-green-0 font-manrope text-[16px]">
              <b className="relative inline-block min-w-[62px]">Filter by</b>
              <div className="flex-1 shadow-[0px_4px_16px_rgba(0,_0,_0,_0.05)] rounded-5 bg-green-0 flex flex-row items-center justify-between py-2.5 px-s box-border min-w-[270px] max-w-full gap-[20px] text-black font-karla">
                <div className="relative w-full">
                  <input type="text" placeholder="search by brand, model, year, etc..." className="h-full w-full outline-none border-none" name="search" id="" />
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  // style="cursor"
                  src="/images/Vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero2 />
      <About />
      <Products />
      <HowItWorks />
      <section className="self-stretch bg-kale-900 overflow-hidden align-middle flex flex-row items-center justify-center py-[10px] box-border max-w-full gap-[20px] text-left text-[39px] text-green-10 font-monrope mq800:py-[60px] mq800:px-[33px] mq800:box-border mq1350:flex mq1350:pl-[66px] mq1350:pr-[66px] mq1350:box-border">
        <img
          className="w-[500px] h-[500.6px] relative min-h-full max-w-full mq1350:flex"
          loading="lazy"
          alt=""
          src="/images/Group27.svg"
        />
        <div className="h-[284px] flex flex-col items-start justify-center gap-[20px] min-w-[588px] max-w-full mq1125:min-w-full mq1350:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit leading-[97%] tracking-[0.05em] font-medium font-inherit mq450:text-[38px] mq450:leading-[37px] mq800:text-[51px] mq800:leading-[50px]">
            {`Join Motoverse's`} <span className="d-block">DAO partnership</span>
          </h1>
          <p className="self-stretch relative text-xl leading-[130%] mq450:text-base mq450:leading-[21px]">
            As a verifier, securely receive your service fee. As a seller, start
            selling your car your way—promote globally, sell quickly. We manage
            paperwork and delivery.
          </p>
          <Link
            to="/Login"
            className="rounded-5 bg-green-400 flex flex-row items-center justify-center py-2.5 px-[39.5px] text-left text-base text-green-0 font-manrope"
          >
            <div className="relative inline-block min-w-[41px]">Create Account</div>
          </Link>
        </div>
      </section>

      <Testmonials />
      <Team />
      
      {/* <footer className="self-stretch bg-green-1000 overflow-hidden items-start justify-start py-[100px] px-[126px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[26px] mq800:pt-[98px] mq800:px-[63px] mq800:pb-[78px] mq800:box-border">
        
        <div className="h-[20px] w-[1190px] py-[50px] max-h-full flex flex-col flex-wrap items-start justify-center box-border max-w-full text-center text-[100px] text-green-100 font-karla mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[26px] mq800:pt-[98px] mq800:px-[63px] mq800:pb-[78px] mq800:box-border">
          <div className="flex items-center justify-center">
            <div className="pl-5">
              <img
                className="ml-5"
                alt=""
                src="/images/Layer_1.svg"
              />
           </div>
          <div className="flex-1 flex flex-col flex-wrap items-start justify-start gap-[10.5px] min-w-[636px] max-w-full mq1125:min-w-full mq800:gap-[15px]">
            <div className="w-[927px] relative tracking-[-0.04em] uppercase font-medium inline-block max-w-full mq1125:min-w-full mq800:gap-[15px]">
              Motoverse
            </div>
            <div className="self-stretch items-start justify-end text-[30px] text-green-50 font-manrope ">
              <h1 className="relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit">
                2024 All Right Reserved ©
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer> */}

<footer className="self-stretch bg-green-1000 overflow-hidden flex flex-1 flex-col flex-wrap items-start justify-center pt-[100px] px-[126px] pb-[100px] box-border gap-[51.5px] max-w-full text-center text-[100px] text-green-100 font-karla mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[26px] mq800:pt-[78px] mq800:px-[63px] mq800:pb-[78px] mq800:box-border h-[264px] w-[1190px] py-[50px] max-h-full  ">
          
        <div className="flex items-start justify-start pt-[21px] px-0 pb-0">
          <img
            className="w-[120px] h-[120px] relative overflow-hidden shrink-0"
            alt=""
            src="/images/Layer_1.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-auto min-w-[636px] max-w-full mq1125:min-w-full mq800:gap-[15px]">
          <div className="w-[927px] relative tracking-[-0.04em] uppercase font-medium inline-block max-w-full mq450:text-[43px] mq800:text-[70px]">
            Motoverse
          </div>
          <div className="self-stretch flex flex-row items-start justify-end text-left text-20xl text-green-50">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
              2024 All Right Reserved ©
            </h1>
          </div>
        </div>
      </footer>
      


    </div>
  );
};

export default Hero;
