import HeroOne from "./HeroOne";
import DashNav from "./DashNav";
// import { button } from "react-bootstrap";
import { DropdownMenu } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-[1440px] h-[1023px] max-w-full flex items-start bg-[#F3F3F6] bg-100%">
      <div className="w-[1440px] h-[1533px] max-w-full flex flex-col items-start flex-1">
        <DashNav />
        <div className="self-stretch w-[1440px] h-[1533px] max-w-full flex flex-col items-start gap-[40px] font-manrope ">
          <main className="self-stretch w-[1440px] max-w-full flex font-inherit items-start bg-[#F3F3F6] bg-100% box-border shrink-0 mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
            
            {/* Sidebar starts */}
            <div className="self-stretch w-[240px] max-w-full box-border flex flex-col items-start bg-[#F3F3F6] bg-100% pt-12 pb-s gap-[40px] border-r-[1px] border-solid border-[#B2CBD3] mq1050:hidden">
              <div className="self-stretch w-[240px] h-[184px] max-w-full items-start flex flex-col px-s font-manrope text-base gap-[8px] bg-[#F3F3F6] bg-100%">
                <div className="self-stretch w-full bg-[#1F353C] bg-100% rounded-[41px] py-[8px] px-[20px] ">
                  <Link
                    to=""
                    className="self-stretch w-[160px] h-[24px] flex max-w-full items-center gap-[8px]"
                    target=""
                  >
                    <img
                      src="/images/house.svg"
                      className=""
                      loading="lazy"
                      alt="Logo"
                    />
                    <p className="text-inherit font-inherit leading-normal text-center text-[#ffffff]">
                      Overview
                    </p>
                  </Link>
                </div>

                <div className="self-stretch w-full bg-transparent bg-100% rounded-[41px] py-[8px] px-[20px]">
                  <Link
                    to="Garade"
                    className="self-stretch flex items-center w-[160px] h-[24px] max-w-full gap-[8px]  "
                    target=""
                  >
                    <img
                      src="/images/MyGarage.svg"
                      className="flex flex-col w-[24px] h-[24px]"
                      loading="lazy"
                      alt="Logo"
                    />
                    <p className="text-inherit font-inherit leading-normal text-center text-[#1F353C]">
                      My Garage
                    </p>
                  </Link>
                </div>
                <div className="self-stretch max-w-full bg-transparent bg-100% py-[8px] px-[20px] rounded-[41px] ">
                  <Link
                    to="Garade"
                    className="self-stretch w-[160px] h-[24px] max-w-full flex items-center gap-[8px] "
                    target=""
                  >
                    <img
                      src="/images/VerificationCheck.svg"
                      className="items-center justify-center flex flex-col w-[24px] h-[24px] max-w-full"
                      loading="lazy"
                      alt="Logo"
                    />
                    <p className="text-inherit font-inherit leading-normal text-center text-[#1F353C]">
                      Verification
                    </p>
                  </Link>
                </div>
                <div className="self-stretch max-w-full py-[8px] px-[20px] bg-transparent bg-100% rounded-[41px]">
                  <Link
                    to="Garade"
                    className="flex items-center w-[160px] h-[24px] max-w-full gap-[8px]  "
                    target=""
                  >
                    <img
                      src="/images/Settings.svg"
                      className="flex flex-col w-[24px] h-[24px]"
                      loading="lazy"
                      alt="Logo"
                    />
                    <p className="text-inherit font-inherit leading-normal text-center text-[#1F353C]">
                      Setting
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Sidebar ends */}

            <section className="self-stretch w-[1200px] max-w-full p-[40px] flex flex-col items-start gap-[40px] flex-1 box-border font-manrope text-center bg-[#F3F3F6] bg-100%">
              <HeroOne />
              {/* Garage starts */}
              <div className="self-stretch w-[1120px] h-[964px] max-w-full flex flex-col p-s items-center gap-[20px] rounded-2xl bg-[#FFF] bg-100% font-manrope font-[400px] text-center  box-border">
                <div className="self-stretch w-[1080px] h-[90px] max-w-full flex flex-col items-start gap-[20px] ">
                  <div className="self-stretch w-[1080px] h-[30px] max-w-full flex items-start justify-between gap-[auto] mq750:flex-wrap">
                    <h3 className="font-inherit text-xl leading-normal text-[#1F353C]">
                      My Garage
                    </h3>
                    <div className="w-[248px] h-[30px] max-w-full flex items-center justify-end gap-[20px]">
                      <button className="w-[160px] h-[30px] max-w-full flex py-[4px] px-s items-center justify-center gap-[10px] rounded-full bg-[#B2CBD3] bg-100%">
                        <h6 className="leading-normal text-base font-inherit text-[#fff]">
                          Add my car
                        </h6>
                      </button>
                      <div className="flex items-center justify-center gap-s">
                        <button className="flex flex-col items-center justify-center gap-[10px] p-[5px] box-border">
                          <img
                            className="shrink-0 w-6 h-6 max-w-full "
                            loading="lazy"
                            alt=""
                            src="/images/Menu.svg"
                          />
                        </button>

                        <button className="flex flex-col items-center justify-center gap-[10px] p-[5px] box-border">
                          <img
                            className="shrink-0 w-6 h-6 max-w-full "
                            loading="lazy"
                            alt=""
                            src="/images/hamburger.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch flex items-center justify-center w-[1080px] h-[40px] max-w-full box-border gap-s pr-s">
                    <div className="w-[160px] h-[auto] flex flex-col items-start max-w-full gap-[10px] rounded-xl py-[8px] px-[12px] border-[1px] border-solid border-[#B2CBD3]">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                          <div className="self-stretch w-[136px] h-[24px] max-w-full flex gap-[10px] items-start justify-between">
                            <h6 className="h-[24px]  font-inherit max-w-full text-base text-[#1F353C]">
                              Status
                            </h6>
                            <div className="w-[24px] h-[24px] max-w-full flex flex-col items-center justify-center gap-[10px]">
                              <DropdownMenu.TriggerIcon />
                            </div>
                          </div>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="mt-[10px]">
                          <div className="bg-[#00000000]">Beginner</div>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </div>

                    <div className="w-[660px] h-[40px] max-w-full flex items-start flex-1 border-[1px] border-solid border-[#B2CBD3] rounded-xl gap-[10px] px-[12px] py-[8px]">
                      <input
                        type="text"
                        placeholder="Search by name"
                        className="h-[24px] flex-1 text-base text-[#1F353C] font-inherit whitespace-pre-wrap w-full outline-none border-none bg-transparent"
                        name="text"
                        id=""
                      />
                      <button onClick={open}>
                        <img src="/images/Eye.svg" alt="" />
                      </button>
                    </div>

                    <div className="w-[200px] h-[40px] max-w-full flex flex-col items-start gap-[10px] border-[1px] border-solid border-[#B2CBD3] rounded-xl px-[12px] py-[8px]">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                          <div className="self-stretch flex items-start w-[176px] h-[24px] max-w-full justify-between gap-[10px]">
                            <div>
                              <h6 className="h-[24px] flex-1  font-inherit max-w-full text-base text-[#1F353C]">
                                Recently received
                              </h6>
                            </div>
                            <div className="flex flex-col w-[24px] h-[24px] max-w-full justify-center items-center gap-[10px]">
                              <DropdownMenu.TriggerIcon />
                            </div>
                          </div>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Content className="mt-[10px]">
                          <div className="text-[#00000]">Beginner</div>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </div>
                  </div>
                </div>

                {/* product cards starts */}
                <div className="self-stretch w-[1080px] h-[397px] max-w-full flex items-center justify-center gap-s box-border font-manrope">
                  {/* Left Card starts */}
                  <div className="card w-[426px] h-[397px] max-w-full flex flex-col items-center flex-1 rounded-xl border-[1px] border-solid border-[#E7E7F1] bg-[#FFF] bg-100% shadow-[0px 5px 10.1px 0px rgba(0, 0, 0, 0.04)]">
                    <div className="self-stretch h-[236px] max-w-full">
                      <img src="" className="shrink-0" loading="Lazy" alt="" />
                    </div>
                    <div className="self-stretch w-[426px] h-[161px] max-w-full items-start flex flex-col p-s ">
                      <div className="self-stretch w-[386px] h-[57px] max-w-full flex flex-col items-start gap-[8px]">
                        <div className="self-stretch w-[386px] h-[22px] max-w-full items-start gap-[8px]">
                          <div className="w-[160px] h-[22px] max-w-full flex items-start justify-start gap-[8px] flex-wrap">
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                          </div>
                        </div>
                        <div className="w-[192px] h-[27px] max-w-full flex items-start  justify-center gap-[4px]">
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                        </div>
                      </div>

                      {/* line starts */}
                      <div className="w-[386px] h-[1px] max-w-full bg-[#B2CBD3] bg-100%" />
                      {/* line ends */}

                      <div className="self-stretch w-[386px] h-[24px] max-w-full flex justify-between items-start font-manrope">
                        <div className="w-[85px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                        <div className="w-[107px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                      </div>
                    </div>
                    <img src="" className="icon" alt="" />
                  </div>
                  {/* Left Card ends */}

                  {/* middle starts*/}
                  <div className="w-[188px] h-[42px] max-w-full ">
                    <h3 className="text-base font-inherit font-[400px] leading-normal text-[#4D28FF]">
                      Tier 2{" "}
                      <span className="text-[#7CA1AD]">
                        is required to unlock the feature
                      </span>{" "}
                    </h3>
                  </div>
                  {/* middle ends*/}

                  {/* right card starts */}
                  <div className="card w-[426px] h-[397px] max-w-full flex flex-col items-center flex-1 rounded-xl border-[1px] border-solid border-[#E7E7F1] bg-[#FFF] bg-100% shadow-[0px 5px 10.1px 0px rgba(0, 0, 0, 0.04)]">
                    <div className="self-stretch h-[236px] max-w-full">
                      <img src="" className="shrink-0" loading="Lazy" alt="" />
                    </div>
                    <div className="self-stretch w-[426px] h-[161px] max-w-full items-start flex flex-col p-s ">
                      <div className="self-stretch w-[386px] h-[57px] max-w-full flex flex-col items-start gap-[8px]">
                        <div className="self-stretch w-[386px] h-[22px] max-w-full items-start gap-[8px]">
                          <div className="w-[160px] h-[22px] max-w-full flex items-start justify-start gap-[8px] flex-wrap">
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                          </div>
                        </div>
                        <div className="w-[192px] h-[27px] max-w-full flex items-start  justify-center gap-[4px]">
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                        </div>
                      </div>

                      {/* line starts */}
                      <div className="w-[386px] h-[1px] max-w-full bg-[#B2CBD3] bg-100%" />
                      {/* line ends */}

                      <div className="self-stretch w-[386px] h-[24px] max-w-full flex justify-between items-start font-manrope">
                        <div className="w-[85px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                        <div className="w-[107px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                      </div>
                    </div>
                    <img src="" className="icon" alt="" />
                  </div>
                  {/* right card starts */}
                </div>

                <div className="self-stretch w-[1080px] h-[397px] max-w-full flex items-center justify-center gap-s box-border font-manrope">
                  {/* Left Card starts */}
                  <div className="card w-[426px] h-[397px] max-w-full flex flex-col items-center flex-1 rounded-xl border-[1px] border-solid border-[#E7E7F1] bg-[#FFF] bg-100% shadow-[0px 5px 10.1px 0px rgba(0, 0, 0, 0.04)]">
                    <div className="self-stretch h-[236px] max-w-full">
                      <img src="" className="shrink-0" loading="Lazy" alt="" />
                    </div>
                    <div className="self-stretch w-[426px] h-[161px] max-w-full items-start flex flex-col p-s ">
                      <div className="self-stretch w-[386px] h-[57px] max-w-full flex flex-col items-start gap-[8px]">
                        <div className="self-stretch w-[386px] h-[22px] max-w-full items-start gap-[8px]">
                          <div className="w-[160px] h-[22px] max-w-full flex items-start justify-start gap-[8px] flex-wrap">
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                          </div>
                        </div>
                        <div className="w-[192px] h-[27px] max-w-full flex items-start  justify-center gap-[4px]">
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                        </div>
                      </div>

                      {/* line starts */}
                      <div className="w-[386px] h-[1px] max-w-full bg-[#B2CBD3] bg-100%" />
                      {/* line ends */}

                      <div className="self-stretch w-[386px] h-[24px] max-w-full flex justify-between items-start font-manrope">
                        <div className="w-[85px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                        <div className="w-[107px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                      </div>
                    </div>
                    <img src="" className="icon" alt="" />
                  </div>
                  {/* Left Card ends */}

                  {/* middle starts*/}
                  <div className="w-[188px] h-[42px] max-w-full ">
                  </div>
                  {/* middle ends*/}

                  {/* right card starts */}
                  <div className="card w-[426px] h-[397px] max-w-full flex flex-col items-center flex-1 rounded-xl border-[1px] border-solid border-[#E7E7F1] bg-[#FFF] bg-100% shadow-[0px 5px 10.1px 0px rgba(0, 0, 0, 0.04)]">
                    <div className="self-stretch h-[236px] max-w-full">
                      <img src="" className="shrink-0" loading="Lazy" alt="" />
                    </div>
                    <div className="self-stretch w-[426px] h-[161px] max-w-full items-start flex flex-col p-s ">
                      <div className="self-stretch w-[386px] h-[57px] max-w-full flex flex-col items-start gap-[8px]">
                        <div className="self-stretch w-[386px] h-[22px] max-w-full items-start gap-[8px]">
                          <div className="w-[160px] h-[22px] max-w-full flex items-start justify-start gap-[8px] flex-wrap">
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                            <h3 className="font-inherit leading-normal text-base text-[#7CA1AD font-[700px]"></h3>
                          </div>
                        </div>
                        <div className="w-[192px] h-[27px] max-w-full flex items-start  justify-center gap-[4px]">
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                          <h3 className="font-inherit leading-normal text-2xl font-[400px] text-[#1F353C]"></h3>
                        </div>
                      </div>

                      {/* line starts */}
                      <div className="w-[386px] h-[1px] max-w-full bg-[#B2CBD3] bg-100%" />
                      {/* line ends */}

                      <div className="self-stretch w-[386px] h-[24px] max-w-full flex justify-between items-start font-manrope">
                        <div className="w-[85px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                        <div className="w-[107px] h-[24px] max-w-full flex items-center justify-center gap-[4px] flex-wrap">
                          <img src="" className="icon" alt="" />
                          <h3 className="font-inherit leading-normal text-base text-[#349A04] font-[700px]"></h3>
                        </div>
                      </div>
                    </div>
                    <img src="" className="icon" alt="" />
                  </div>
                  {/* right card starts */}
                </div>
                {/* product cards ends */}

              </div>
              {/* Garage ends */}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
