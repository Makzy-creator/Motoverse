import Navbar from "../../Components/LandingPage/Navbar";
import HeroOne from "./HeroOne";
import { Button } from "react-bootstrap";
import { DropdownMenu } from "@radix-ui/themes";
// import CardComponent from "../components/CardComponent";
// import { Form } from "react-bootstrap";

const MyDash = () => {
  return (
    
    <div className="w-[1440px] max-w-full relative bg-white-50 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] font-manrope">
      <Navbar/> 
      <main className="w-[1440px] h-[1431px] self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border font-inherit">
        <div className="w-[240px] h-[923px] max-w-full box-border flex flex-col items-start justify-start py-12 px-0 border-r-[1px] border-solid border-green-200 mq1050:hidden">
          Overview My Garage Verification Setting
        </div>

        <section className="font-manrope h-[923px] flex-1 overflow-y-auto flex flex-col items-start justify-start px-[40px] pb-[447px] box-border gap-[40px] max-w-[calc(100%_-_240px)] text-center text-base text-blue-700 font-text lg:h-auto lg:pt-[29px] lg:pb-[291px] lg:box-border mq750:gap-[20px] mq1050:pt-5 mq1050:pb-[189px] mq1050:box-border mq1050:max-w-full mq450:pb-[123px] mq450:box-border">
          <HeroOne />
          <div className="w-[1120px] h-[547px] self-stretch rounded-2xl bg-green-0 flex flex-col items-start justify-start text-[#1F353C] p-5 box-border gap-[20px] shrink-0 [debug_commit:1de1738] max-w-full">
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-inherit text-xl font-text text-green-900 text-left inline-block min-w-[99px] mq450:text-base">
                    My Garage
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[20px]">
                  <button className="cursor-pointer [border:none] py-[4px] px-[20px] bg-[#B2CBD3] bg-100% rounded-full flex flex-row items-center justify-center whitespace-nowrap hover:bg-[#96C9D9] hover:bg-100%">
                    <h6 className="relative text-base font-text text-[#fff] text-left inline-block min-w-[81px]">
                      Add my car
                    </h6>
                  </button>
                  <div className="flex flex-row items-center justify-center gap-[20px]">
                    <Button className="w-6 h-6 flex flex-col items-center justify-center pt-[3.8px] px-[3px] pb-[3.7px] box-border ">
                      <img
                        className="w-[16.5px] h-[16.5px] relative"
                        loading="lazy"
                        alt=""
                        src="/images/Menu.svg"
                      />
                    </Button>

                    <Button className="flex flex-col items-center justify-center py-[4.5px] px-[3px] box-border w-6 h-6">
                      <img
                        className="w-[18px] h-[15px] relative"
                        loading="lazy"
                        alt=""
                        src="/images/hamburger.svg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start w-[1080px] h-[40px] max-w-full box-border gap-[20px] pr-[20px]">
                <div className="">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <div className="w-[160px] h-[40px] max-w-full border-[1px] border-solid border-[#B2CBD3] rounded-xl items-center justify-between gap-[10px] px-[12px] py-[8px] flex flex-row">
                        <div>
                          <h6>Status</h6>
                        </div>
                        <div>
                          <DropdownMenu.TriggerIcon />
                        </div>
                      </div>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content
                      style={{
                        backgroundColor: "#00000000",
                      }}
                    >
                      <div className="">Beginner</div>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>

                <div className="w-[660px] h-[40px] max-w-full border-[1px] border-solid border-[#B2CBD3] rounded-xl items-center justify-between gap-[10px] px-[12px] py-[8px] flex flex-row mq750:flex-wrap mq750:min-w-full">
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="text-[16px] whitespace-pre-wrap w-full outline-none border-none bg-transparent"
                    name="text"
                    id=""
                  />
                  <Button onClick={open}>
                     <img src="/images/Eye.svg" alt="" />
                  </Button>
                </div>
                <div className="">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <div className="w-[160px] h-[40px] max-w-full border-[1px] border-solid border-[#B2CBD3] rounded-xl items-center justify-between gap-[10px] px-[12px] py-[8px] flex flex-row">
                        <div>
                          <h6>Recently received</h6>
                        </div>
                        <div>
                          <DropdownMenu.TriggerIcon />
                        </div>
                      </div>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content
                      style={{
                        backgroundColor: "#00000000",
                      }}
                    >
                      <div className="">Beginner</div>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
              </div>
            </form>
            <div className="self-stretch w-[188px] max-w-full flex-1 flex flex-row items-center justify-center pt-[176.5px] box-border mx-[446px]">
               <p className="self-stretch relative text-base font-inherit items-center justify-center text-[#858597] px-[20px] font-inherit "><span className="text-[#4D28FF]">Tier 2 </span>is required to unlock the feature</p>
            </div> 
          </div>
          <div className="self-stretch rounded-2xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[12px] [debug_commit:1de1738] max-w-full text-left text-xl text-green-900">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[20px]">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="h-[27px] w-[116px] relative inline-block mq450:text-base">My Favorites</div>
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <div className="w-6 flex flex-col items-center justify-center pt-[3.8px] px-[3px] pb-[3.7px] box-border h-6">
                        <img className="w-[16.5px] h-[16.5px] relative" alt="" src="/images/Menu.svg" />
                      </div>
                      <div className="w-6 flex flex-col items-center justify-center pt-[3.8px] px-[3px] pb-[3.7px] box-border h-6">
                        <img className="w-[16.5px] h-[16.5px] relative" alt="" src="/images/hamburger.svg" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] box-border overflow-x-auto shrink-0 flex flex-row items-center justify-start py-2 pr-[416px] pl-0 gap-[8px] text-3xs border-t-[1px] border-solid border-green-200 border-b-[1px] lg:pr-52 lg:box-border mq750:pr-[104px] mq750:box-border mq450:pr-5 mq450:box-border">
                <div className="self-stretch w-[280px] shrink-0 flex flex-row items-start justify-start py-0 pr-[38px] pl-0 box-border">
                  <div className="self-stretch flex-1 relative">Items</div>
                </div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Floor price</div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Listing price</div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Owner</div>
              </div>
            </div>
            {/* <div className="self-stretch h-[250.5px] flex flex-row items-start justify-start max-w-full text-base">
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-col items-center justify-start border-b-[1px] border-solid border-green-100">
                  <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start py-0 pr-[544px] pl-0 gap-[8px] lg:pr-[272px] lg:box-border mq750:pr-[136px] mq750:box-border mq450:pr-5 mq450:box-border">
                    <div className="w-[280px] shrink-0 flex flex-row items-center justify-start py-0 pr-[78px] pl-0 box-border gap-[8px] text-xl mq450:pr-5 mq450:box-border">
                      <img className="h-[60px] w-[60px] relative object-cover" alt="" src="/images/car1.svg" />
                      <div className="h-[27px] flex-1 relative inline-block whitespace-nowrap mq450:text-base">Audi Q8 e-tron</div>
                    </div>
                    <div className="h-[22px] w-[120px] shrink-0 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 relative whitespace-nowrap">16.4 dot</div>
                    </div>
                    <div className="h-[22px] w-[120px] relative inline-block shrink-0 whitespace-nowrap">24 dot</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyDash;

/*  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap"
import Homepage from "../components/Homepage";
import OverviewList from "../components/OverviewList";
import DashboardContent from "../components/DashboardContent";
import CardComponent from "../components/CardComponent";



const Dashboard = () => {
  return (   
          <div className="self-stretch rounded-2xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[12px] [debug_commit:1de1738] max-w-full text-left text-xl text-green-900">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[20px]">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="h-[27px] w-[116px] relative inline-block mq450:text-base">My Favorites</div>
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <div className="w-6 flex flex-col items-center justify-center pt-[3.8px] px-[3px] pb-[3.7px] box-border h-6">
                        <img className="w-[16.5px] h-[16.5px] relative" alt="" src="/vector-14.svg" />
                      </div>
                      <div className="flex flex-col items-center justify-center py-[4.5px] px-[3px] box-border w-6 h-6">
                        <img className="w-[18px] h-[15px] relative" alt="" src="/vector-15.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] box-border overflow-x-auto shrink-0 flex flex-row items-center justify-start py-2 pr-[416px] pl-0 gap-[8px] text-3xs border-t-[1px] border-solid border-green-200 border-b-[1px] lg:pr-52 lg:box-border mq750:pr-[104px] mq750:box-border mq450:pr-5 mq450:box-border">
                <div className="self-stretch w-[280px] shrink-0 flex flex-row items-start justify-start py-0 pr-[38px] pl-0 box-border">
                  <div className="self-stretch flex-1 relative">Items</div>
                </div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Floor price</div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Listing price</div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">Owner</div>
              </div>
            </div>
            <div className="self-stretch h-[250.5px] flex flex-row items-start justify-start max-w-full text-base">
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-col items-center justify-start border-b-[1px] border-solid border-green-100">
                  <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start py-0 pr-[544px] pl-0 gap-[8px] lg:pr-[272px] lg:box-border mq750:pr-[136px] mq750:box-border mq450:pr-5 mq450:box-border">
                    <div className="w-[280px] shrink-0 flex flex-row items-center justify-start py-0 pr-[78px] pl-0 box-border gap-[8px] text-xl mq450:pr-5 mq450:box-border">
                      <img className="h-[60px] w-[60px] relative object-cover" alt="" src="/image-20@2x.png" />
                      <div className="h-[27px] flex-1 relative inline-block whitespace-nowrap mq450:text-base">Audi Q8 e-tron</div>
                    </div>
                    <div className="h-[22px] w-[120px] shrink-0 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 relative whitespace-nowrap">16.4 dot</div>
                    </div>
                    <div className="h-[22px] w-[120px] relative inline-block shrink-0 whitespace-nowrap">24 dot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>);
};

export default Dashboard;





*/
