
const SideBar = () => {
    return (
      <div className="flex flex-col items-start justify-start py-0 px-5 gap-[8px] text-left text-base text-green-900 font-text">
        <div className="rounded-22xl bg-green-900 flex flex-row items-center justify-start py-2 pr-20 pl-s gap-[8px] text-green-0">
          <div className="flex flex-col items-center justify-center pt-[2.6px] px-[3px] pb-[2.7px] box-border w-6 h-6">
            <img
              className="w-[18px] h-[18.7px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="relative inline-block min-w-[68px]">Overview</div>
        </div>
        <div className="rounded-22xl flex flex-row items-center justify-start py-2 pr-[69px] pl-5 gap-[8px]">
          <div className="flex flex-col items-center justify-center py-[3px] pr-[2.2px] pl-[2.3px] box-border w-6 h-6">
            <img
              className="w-[19.5px] h-[18px] relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="relative inline-block min-w-[79px]">My Garage</div>
        </div>
        <div className="rounded-22xl flex flex-row items-center justify-start py-2 pr-[63px] pl-5 gap-[8px]">
          <div className="flex flex-col items-center justify-center p-[1.5px] box-border w-6 h-6">
            <img
              className="w-[21px] h-[21px] relative"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="relative inline-block min-w-[85px]">Verification</div>
        </div>
        <div className="rounded-22xl flex flex-row items-center justify-start py-2 pr-[94px] pl-5 gap-[8px]">
          <div className="flex flex-col items-center justify-center py-[3px] pr-[2.7px] pl-[2.6px] box-border w-6 h-6">
            <img
              className="w-[18.7px] h-[18px] relative"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className="relative inline-block min-w-[54px]">Setting</div>
        </div>
      </div>
    );
  };
  
  export default SideBar;
  