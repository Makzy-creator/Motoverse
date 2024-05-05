/*


//last big div that holds my name: 
self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[423px] pl-0 box-border gap-[60px] max-w-full mq450:pr-5 mq450:box-border mq800:gap-[15px] mq800:pr-[105px] mq800:box-border mq1350:gap-[30px] mq1350:pr-[211px] mq1350:box-border


*/



//change pr to 120px which is same with drawing

const Team = () => {
  return (

    <section className="self-stretch w-[1442px] h-[655px] bg-green-100 overflow-hidden flex flex-col items-start justify-start pt-[10px] pr-[120px] pl-[120px] box-border max-w-full text-left text-20xl text-blue-700 font-karla mq450:pl-3 mq450:pr-3 mq450:box-border mq800:pt-[15px] mq800:pr-[62px] mq800:pl-[60px] mq800:box-border">

    {/* -------------------------TEAM START------------------------------- */}

      <div className="self-stretch w-[1197px] h-[415px] flex flex-col items-start justify-start max-w-full mq800:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq1350:gap-[30px]">
          <h1 className="m-0 w-[954px] pb-[60px] relative tracking-[-0.02em] leading-[47px] font-bold font-manrope text-20xl text-green-900 inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq450:pb-[20px] mq450:pt-[10px] mq800:text-12xl mq800:leading-[37px] mq800:pb-[30px]">
            Meet the team
          </h1>
          <div className="self-stretch w-[1197px] flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[60px] max-w-full mq450:gap-[30px] mq1350:gap-[30px] ">
            <div className="flex-1 box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-s min-w-[143px] max-w-full border-t-[1px] border-solid border-mediumpurple mq450:gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                  Mario Andrade
                </h1>
                <h3 className="m-0 relative text-6xl tracking-[-0.02em] font-bold font-inherit text-green-400 mq450:text-xl">
                  Founder, CEO
                </h3>
              </div>
            </div>
            
            <div className="flex-1 box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-s min-w-[150px] max-w-full border-t-[1px] border-solid border-mediumpurple mq450:gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                {`Nagra Rohit `}
                </h1>
                <h3 className="m-0 relative text-6xl tracking-[-0.03em] font-bold font-inherit text-green-400 mq450:text-xl">
                  Smart Contract Developer
                </h3>
              </div>
            </div>

            <div className="flex-1 box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-s min-w-[143px] max-w-full border-t-[1px] border-solid border-mediumpurple mq450:gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                Pat Sinma
                </h1>
                <h3 className="m-0 relative text-6xl tracking-[-0.02em] font-bold font-inherit text-green-400 mq450:text-xl">
                Product Designer
                </h3>
              </div>
            </div>
          </div>


          <div className="self-stretch flex flex-row flex-wrap items-start justify-start  pt-[60px] pr-[px] pl-0 box-border gap-[60px] max-w-full mq450:pr-5 mq450:box-border mq800:gap-[30px] mq800:pr-[10px] mq800:pt-[10px] mq800:box-border mq1350:gap-[30px] mq1350:pr-[211px] mq1350:box-border">
            <div className="flex-1 w-[357px] box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-s min-w-[150px] max-w-full border-t-[1px] border-solid border-mediumpurple">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                  Ganesh Oli
                </h1>
                <h3 className="m-0 relative text-6xl tracking-[-0.02em] font-bold font-inherit text-green-400 mq450:text-xl">
                  Back-End Developer
                </h3>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-s min-w-[150px] max-w-full border-t-[1px] border-solid border-mediumpurple">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[47px] font-bold font-inherit inline-block min-w-[116px] mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                  Favour Chikezie
                </h1>
                <h3 className="m-0 relative text-6xl tracking-[-0.02em] font-bold font-inherit text-green-400 mq450:text-xl">
                  Front-End Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* -------------------------TEAM END------------------------------- */}

    </section>
  );
};

export default Team;
