import HeaderDash from "./HeaderDash";

const MyDash = () => {
  return (
    <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking">
      <HeaderDash />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="h-[923px] box-border flex flex-col items-start justify-start py-12 px-0 border-r-[1px] border-solid border-green-200 mq1050:hidden">
          SideBar
        </div>
      </main>
      <section className="h-[921px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-11 px-10 pb-[447px] box-border gap-[40px] max-w-[calc(100%_-_240px)] text-center text-base text-blue-700 font-text lg:h-auto lg:pt-[29px] lg:pb-[291px] lg:box-border mq750:gap-[20px] mq1050:pt-5 mq1050:pb-[189px] mq1050:box-border mq1050:max-w-full mq450:pb-[123px] mq450:box-border">
        Dashboard Content or First Hero
        <div className="self-stretch rounded-2xl bg-green-0 flex flex-col items-start justify-start p-5 box-border gap-[20px] shrink-0 [debug_commit:1de1738] max-w-full">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-xl font-text text-green-900 text-left inline-block min-w-[99px] mq450:text-base">
                  My Garage
                </div>
              </div>
              
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MyDash;

/*  
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Homepage from "../components/Homepage";
import OverviewList from "../components/OverviewList";
import DashboardContent from "../components/DashboardContent";
import CardComponent from "../components/CardComponent";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-white-50 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Homepage />
      <main className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="h-[923px] box-border flex flex-col items-start justify-start py-12 px-0 border-r-[1px] border-solid border-green-200 mq1050:hidden">
          <OverviewList />
        </div>
        <section className="h-[921px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-11 px-10 pb-[447px] box-border gap-[40px] max-w-[calc(100%_-_240px)] text-center text-base text-blue-700 font-text lg:h-auto lg:pt-[29px] lg:pb-[291px] lg:box-border mq750:gap-[20px] mq1050:pt-5 mq1050:pb-[189px] mq1050:box-border mq1050:max-w-full mq450:pb-[123px] mq450:box-border">
          <DashboardContent />
          <div className="self-stretch rounded-2xl bg-green-0 flex flex-col items-start justify-start p-5 box-border gap-[20px] shrink-0 [debug_commit:1de1738] max-w-full">
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative text-xl font-text text-green-900 text-left inline-block min-w-[99px] mq450:text-base">
                    My Garage
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[20px]">
                  <div className="rounded-l bg-green-200 flex flex-row items-center justify-center py-1 px-[39.5px] whitespace-nowrap">
                    <div className="relative text-base font-text text-green-0 text-left inline-block min-w-[81px]">
                      Add my car
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[20px]">
                    <div className="flex flex-col items-center justify-center pt-[3.8px] pb-[3.7px] pr-[3.7px] pl-[3.8px] box-border w-6 h-6">
                      <img
                        className="w-[16.5px] h-[16.5px] relative"
                        loading="lazy"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center py-[4.5px] px-[3px] box-border w-6 h-6">
                      <img
                        className="w-[18px] h-[15px] relative"
                        loading="lazy"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 pr-s pl-0 box-border gap-[20px] max-w-full">
                <Form.Select className="w-40 font-text text-base text-green-900" />
                <div className="flex-1 rounded-xl box-border flex flex-row items-start justify-start py-1.5 px-[11px] gap-[10px] min-w-[429px] max-w-full border-[1px] border-solid border-green-200 mq750:flex-wrap mq750:min-w-full">
                  <div className="flex-1 relative text-base font-text text-green-900 text-left inline-block min-w-[93px] max-w-full">
                    Search by name
                  </div>
                  <div className="flex flex-col items-center justify-center pt-[3.7px] px-[1.7px] pb-[3.8px] box-border w-6 h-6">
                    <img
                      className="w-[20.6px] h-[16.5px] relative"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                </div>
                <div className="w-[200px] flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-1.5 px-[11px] gap-[10px] border-[1px] border-solid border-green-200">
                    <div className="flex-1 relative text-base font-text text-green-900 text-left">
                      Recently received
                    </div>
                    <div className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
                      <img
                        className="w-4 h-2 relative"
                        alt=""
                        src="/vector-15.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <CardComponent
                iconImage="pending_I445:18263;445:13240;445:13195"
                listImage="pending_I445:18263;445:13046;445:13045"
                viewImage="pending_I445:18263;445:13124;445:13118"
              />
              <div className="w-[188px] flex flex-col items-start justify-start pt-[176.5px] px-0 pb-0 box-border">
                <div className="self-stretch relative">
                  <span>Tier 2</span>
                  <span className="text-green-400">
                    {" "}
                    is required to unlock the feature.
                  </span>
                </div>
              </div>
              <CardComponent
                iconImage="pending_I445:18265;445:13240;445:13195"
                listImage="pending_I445:18265;445:13046;445:13045"
                viewImage="pending_I445:18265;445:13124;445:13118"
                propBorder="unset"
              />
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-green-0 overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border gap-[12px] [debug_commit:1de1738] max-w-full text-left text-xl text-green-900">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[20px]">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="h-[27px] w-[116px] relative inline-block mq450:text-base">
                      My Favorites
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex flex-col items-center justify-center pt-[3.8px] pb-[3.7px] pr-[3.7px] pl-[3.8px] box-border w-6 h-6">
                        <img
                          className="w-[16.5px] h-[16.5px] relative"
                          alt=""
                          src="/vector-14.svg"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center py-[4.5px] px-[3px] box-border w-6 h-6">
                        <img
                          className="w-[18px] h-[15px] relative"
                          alt=""
                          src="/vector-151.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[30px] box-border overflow-x-auto shrink-0 flex flex-row items-center justify-start py-2 pr-[416px] pl-0 gap-[8px] text-3xs border-t-[1px] border-solid border-green-200 border-b-[1px] lg:pr-52 lg:box-border mq750:pr-[104px] mq750:box-border mq450:pr-5 mq450:box-border">
                <div className="self-stretch w-[280px] shrink-0 flex flex-row items-start justify-start py-0 pr-[38px] pl-0 box-border">
                  <div className="self-stretch flex-1 relative">Items</div>
                </div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">
                  Floor price
                </div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">
                  Listing price
                </div>
                <div className="self-stretch w-[120px] relative inline-block shrink-0">
                  Owner
                </div>
              </div>
            </div>
            <div className="self-stretch h-[250.5px] flex flex-row items-start justify-start max-w-full text-base">
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch flex flex-col items-center justify-start border-b-[1px] border-solid border-green-100">
                  <div className="self-stretch overflow-x-auto flex flex-row items-center justify-start py-0 pr-[544px] pl-0 gap-[8px] lg:pr-[272px] lg:box-border mq750:pr-[136px] mq750:box-border mq450:pr-5 mq450:box-border">
                    <div className="w-[280px] shrink-0 flex flex-row items-center justify-start py-0 pr-[78px] pl-0 box-border gap-[8px] text-xl mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[60px] w-[60px] relative object-cover"
                        alt=""
                        src="/image-20@2x.png"
                      />
                      <div className="h-[27px] flex-1 relative inline-block whitespace-nowrap mq450:text-base">
                        Audi Q8 e-tron
                      </div>
                    </div>
                    <div className="h-[22px] w-[120px] shrink-0 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 relative whitespace-nowrap">
                        16.4 dot
                      </div>
                    </div>
                    <div className="h-[22px] w-[120px] relative inline-block shrink-0 whitespace-nowrap">
                      24 dot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;




*/
