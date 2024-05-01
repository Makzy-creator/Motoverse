import Navbar from "./Navbar";
// import HeroBg from "./HeroBg";
import Hero2 from "./Hero2";
import About from "./About";
import Products from "./Products";
import HowItWorks from "./HowItWorks";
import Testmonials from "./Testmonials";
import Team from "./Team";

/*
w-full relative bg-white-100 flex flex-col items-start justify-start leading-[normal] tracking-[normal]

self-stretch bg-[url(/images/.png)] 
  flex flex-col items-start justify-start pt-0 px-0 pb-[463px] box-border relative gap-[81px] max-w-full text-left text-[80px] text-green-200 font-karla mq450:gap-[20px] mq1125:pb-[301px] mq1125:box-border mq800:gap-[40px] mq800:pb-[196px] mq800:box-border

w-[847px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full

w-[607px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[5] mq800:gap-[20px]

self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full

m-0 self-stretch relative text-inherit tracking-[-0.05em] leading-[90%] font-medium font-inherit mq450:text-[24px] mq450:leading-[29px] mq800:text-[40px] mq800:leading-[43px]

w-[502px] relative text-xl leading-[130%] text-green-0 inline-block max-w-full mq450:text-base mq450:leading-[21px]

self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-base text-green-0 font-manrope

relative inline-block min-w-[62px]


flex-1 shadow-[0px_4px_16px_rgba(0,_0,_0,_0.05)] rounded bg-green-0 flex flex-row items-center justify-between py-2.5 px-s box-border min-w-[270px] max-w-full gap-[20px] text-black font-karla

relative


*/

const Hero = () => {
  return (
    <div className="w-full relative bg-white-100 flex flex-col leading-[normal] tracking-[normal]">
      <section className="overflow-y-scroll scrollbar-none self-stretch bg-[url(/images/Group28.svg)] bg-no-repeat bg-cover bg-contain flex flex-col px-0 pt-0 p-[300px] box-border relative gap-[81px] max-w-full text-left text-[50px] text-green-200 font-Manrope mq450:gap-[20px] mq1125:pb-[301px] mq1125:box-border mq800:gap-[40px] mq800:pb-[196px] mq800:box-border ">
        {/* <HeroBg /> */}
        <Navbar />
        <div className="container flex flex-row align-middle items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="w-[607px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[5] mq800:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[90%] leading-loose font-medium font-inherit mq450:text-[24px] mq450:leading-[29px] mq800:text-[40px] mq800:leading-[43px]">
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
      <section className="self-stretch bg-kale-900 overflow-hidden flex flex-row items-center justify-between py-[92.2px] px-[133px] box-border max-w-full gap-[20px] text-left text-[64px] text-green-10 font-karla mq800:py-[60px] mq800:px-[33px] mq800:box-border mq1350:flex-wrap mq1350:pl-[66px] mq1350:pr-[66px] mq1350:box-border">
        <img
          className="w-[512px] relative max-h-full object-cover max-w-full mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/group-27@2x.png"
        />
        <div className="w-[588px] flex flex-col items-start justify-start gap-[20px] min-w-[588px] max-w-full mq1125:min-w-full mq1350:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit leading-[97%] font-medium font-inherit mq450:text-[38px] mq450:leading-[37px] mq800:text-[51px] mq800:leading-[50px]">
            Join Motoverse DAO partnership
          </h1>
          <div className="self-stretch relative text-xl leading-[130%] mq450:text-base mq450:leading-[21px]">
            As a verifier, securely receive your service fee. As a seller, start
            selling your car your way—promote globally, sell quickly. We manage
            paperwork and delivery.
          </div>
          <div className="rounded-l bg-green-400 flex flex-row items-center justify-start py-2.5 px-m whitespace-nowrap text-base text-green-0 font-manrope">
            <div className="relative inline-block min-w-[117px]">
              Create Account
            </div>
          </div>
        </div>
      </section>
      <Testmonials />
      <Team />
      <section className="self-stretch bg-green-1000 overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[150.5px] px-[126px] pb-[120px] box-border gap-[51.5px] max-w-full text-center text-[173.8px] text-green-100 font-karla mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[26px] mq800:pt-[98px] mq800:px-[63px] mq800:pb-[78px] mq800:box-border">
        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
          <img
            className="w-[160.9px] h-[160.9px] relative overflow-hidden shrink-0"
            alt=""
            src="/layer-1-1.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[30.5px] min-w-[636px] max-w-full mq1125:min-w-full mq800:gap-[15px]">
          <div className="w-[927px] relative tracking-[-0.04em] uppercase font-medium inline-block max-w-full mq450:text-[43px] mq800:text-[70px]">
            Motoverse
          </div>
          <div className="self-stretch flex flex-row items-start justify-end text-left text-20xl text-green-50">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
              2024 All Right Reserved ©
            </h1>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
