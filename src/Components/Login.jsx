import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Buyer" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="w-[585px] h-[693px] bg-green-0 rounded-2xl flex flex-col items-center justify-center p-0 px-0 pb-10 box-border gap-[40px] leading-[normal] tracking-[normal]max-w-full max-h-full mq293:gap-[20px] shadow-[10px_10px_14.2px_rgba(0,_0,_0,_0.07)] overflow-hidden">
        <section className="self-stretch flex flex-col items-center justify-center px-5 box-border max-w-full text-center text-20xl text-green-900 font-manrope">
          <div className="w-[400px] gap-[12px] max-w-full">
            <div className="">
              <img
                className="relative rounded-5 inline-block object-contain"
                alt=""
                src="/images/Key-Login.svg"
                loading="lazy"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center px-5">
              <h1 className="relative text-inherit leading-[47px] font-bold font-inherit inline-block min-w-[105px]">
                Login
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-[48.5px] text-base mq399:pl-5 mq399:pr-5 mq399:box-border">
              <div className="flex-1 relative">
                Add your identity in order to access our feature and enable to
                buy and sell vehicles in our marketplace.
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-base text-green-0 font-manrope">
          <div
            className="flex flex-col items-start justify-start gap-[20px]
"
          >
            <div
              className="rounded-full bg-[#3D6470] flex flex-row items-start justify-start py-2.5 px-[50px] whitespace-nowrap cursor-pointer"
              onClick={onFrameContainer1Click}
            >
              <Link to="/CreateIdentity" className="" target="blanc">
                <p className="relative inline-block min-w-[41px]">
                  Create Identity
                </p>
              </Link>
            </div>

            <div
              className="rounded-full flex flex-row items-start justify-start py-2.5 px-[19px] whitespace-nowrap cursor-pointer text-green-900 border-[1px] border-solid border-[#3D6470]"
              onClick={onFrameContainerClick}
            >
              <Link to="/Home" className="" target="blanc">
                <p className="relative inline-block min-w-[41px]">
                  Import Existing Identity
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
