// import {logo} from '../../assets';

const Navbar = () => {
  return (
    <div>
        <header className="self-stretch bg-white-50 flex flex-row items-center justify-between py-3 px-xl box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-8xl text-black font-karla mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
            <div className="w-[413px] flex flex-row items-center justify-start gap-[60px] max-w-full mq450:gap-[30px] mq800:w-[237px]">
                <button className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                    <img src="../../assets/logo.svg" className="h-[25px] w-[25px] relative overflow-hidden shrink-0" loading="lazy" />
                    <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
                        Motoverse
                    </h3>
                </button>

                <div className="">
                    <ul className="flex flex-row items-start justify-start gap-[20px] text-xl mq800:hidden">
                        <li className="relative leading-[130%] inline-block min-w-[54px]">
                            About
                        </li>
                        <li className="relative leading-[130%] inline-block min-w-[54px]">Technology</li>
                    </ul>
                </div>
            </div>

            <div className="w-[387px] flex flex-row items-center justify-start gap-[40px] max-w-full text-xl mq450:gap-[20px]">
                <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start">
                            <button className="relative leading-[130%] inline-block min-w-[72px]">
                                Country
                            </button>
                        </div>
                        <button className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
                             <img className="w-4 h-2 relative" alt="dropdown icon" src="" />
                        </button>
                    </div>

                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start">
                            <div className="relative leading-[130%] inline-block min-w-[51px]">
                                USDC
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-2 px-1 box-border w-6 h-6">
                            <img className="w-4 h-2 relative" src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="rounded bg-green-400 flex flex-row items-center justify-center py-2.5 px-[39.5px] text-left text-base text-green-0 font-manrope">
                    <button className="relative inline-block min-w-[41px]">Login</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar