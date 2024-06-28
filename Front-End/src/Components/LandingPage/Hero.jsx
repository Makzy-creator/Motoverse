import Navbar from "./Navbar";
import Hero2 from "./Hero2";
import About from "./About";
import Products from "./Products";
import HowItWorks from "./HowItWorks";
import Testmonials from "./Testmonials";
import Team from "./Team";

const Hero = () => {
  return (
    <div className="w-full bg-white-100 flex flex-col ">
      <Navbar />
      
      <section className="w-full sm:h-[1024px] sm:mb-[-28.5rem] h-[513px] max-h-full bg-[url(/images/Bghero.png)] bg-no-repeat sm:bg-contain bg-cover grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 pt-[31px] sm:pt-[85px] box-border font-karla ">
          <div className="self-stretch flex flex-col items-start gap-[20px] max-w-full">
              <h1 className="self-stretch relative w-full font-inherit sm:text-[40px] text-[30px] text-[#BEC6FF] font-bold sm:font-[500] tracking-[-0.58px] sm:tracking-[-1px] leading-[120%] sm:leading-[100%]">
                  Explore a World of
                <span className="block"> Cars Safely on the </span>
                <span className="block">Blockchain </span>
              </h1>
                <p className="w-full self-stretch font-karla leading-normal sm:leading-[130%] text-[#FFF] font-[400]text-base sm:text-[18px]">
                  Dive into a decentralized shopping experience where every
                  transaction is transparent, every car has a story, and every
                  deal is sealed with trust.
                </p>
           
            {/* <div className="self-stretch flex flex-row flex-wrap items-center justify-start mt-[40px] gap-[20px] max-w-full text-base text-green-0 font-manrope">
              <b className="relative inline-block min-w-[62px]">Filter by</b>
              <div className="flex-1 shadow-[0px_4px_16px_rgba(0,_0,_0,_0.05)] rounded-5 bg-green-0 flex flex-row items-center justify-between py-2.5 px-s box-border min-w-[270px] max-w-full gap-[20px] text-black font-karla">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="search by brand, model, year, etc..."
                    className="h-full w-full outline-none border-none"
                    name="search"
                    id=""
                  />
                </div>
                <img
                  className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/images/Vector.svg"
                  loading="lazy"
                />
              </div>
            </div> */}
          </div>
      </section>
      <Hero2 />
      <About />
      <Products />
      <HowItWorks />
      <section className="self-stretch w-full h-auto px-6 md:px-12 py-[50px] flex gap-[10px] bg-[#004EB7]">
        <div className="block sm:flex items-center justify-center sm:justify-between gap-[60px] ">

          <img
          className="w-[300px] sm:w-[280px] h-auto"
          loading="lazy"
          alt=""
          src="/images/MotoverseDAO.svg"
        />

        <div className="flex flex-col items-start gap-[16px] w-full font-karla">
          <h1 className="font-[700] sm:font-[500] leading-[97%] text-[25px] sm:text-[30px]  text-[#F1F7F5]">
            {`Join Motoverse's`}
            <span className="block">DAO Partnership</span>
          </h1>
            <p className="self-stretch font-[400] text-[18px] leading-[130%] text-[#F1F7F5] font-karla">
            As a verifier, securely receive your service fee. As a seller, start selling your car your way—promote globally, sell quickly. We manage paperwork and delivery.</p>
            <button className="bg-[#4E7FFF] rounded-full py-[5px] px-[15px] text-[12px] text-[#FFF] font-[400] leading-normal font-manrope items-center">Create Account</button>
        </div>

        </div>
        
        
      </section>
      <Testmonials />
      <Team />

      <footer>
        <div className="self-stretch w-full h-auto flex flex-col px-6 md:px-12 py-[25px] items-center justify-center sm:justify-between sm:items-end relative gap-[10px] bg-[#111B3C] box-border">
          <div className="sm:self-stretch flex w-full items-center justify-center gap-[10px] sm:gap-[20px] sm:flex-1">
            <img
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mt-[-20px]"
              alt=""
              src="images/newlogo.svg"
            />
            <h1 className="font-karla text-[#ECEDFF] text-center text-[40px] sm:text-[60px] uppercase font-[500] tracking-[-1.0px] sm:tracking-[-3px] leading-normal">
              Motoverse
              <span className="block sm:items-end lowercase font-[400] sm:font-[700] text-[16px] sm:text-[18px] leading-normal sm:leading-[120%] tracking-[-0.1px] text-[#F8F8FF] sm:mr-[-10rem]">
              2024 All Right Reserved ©
              </span>
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
