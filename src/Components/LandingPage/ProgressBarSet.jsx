import { useMemo } from "react";

const ProgressBarSet = ({
    imageGallery,
    imageillustration,
    vehicleValuationVerificat,
    enjoyPeaceOfMindWithBlock,
    propPadding,
    propMinWidth,
    propMinHeight,
    propPadding1,
    propFilter,
    propBoxShadow,
    propOverflow,
    propLineHeight,
}) => {
    const progressBarSetStyle = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const cardComponentStyle = useMemo(() => {
        return {
            filter: propFilter,
            boxShadow: propBoxShadow,
            overflow: propOverflow,
        };
    }, [propFilter, propBoxShadow, propOverflow]);

    const vehicleValuationStyle = useMemo(() => {
        return {
            lineHeight: propLineHeight,
        };
    }, [propLineHeight]);

    return (
        <div

            className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[37px] max-w-full text-left text-20xl text-green-900 font-karla mq800:gap-[18px]"
            style={progressBarSetStyle}
        >
            <div className="h-[437px] w-[100px] flex flex-row items-center justify-center relative gap-[35px]">
                <div className="h-[437px] w-px absolute !m-[0] top-[47px] left-[50px] box-border border-r-[1px] border-solid border-green-400 "/>
                <div className="!m-[0] absolute w-[70px] h-[70px] top-[calc(50%_-_47px)] left-[calc(65%_-_50px)] rounded-full bg-green-0 flex flex-row items-center justify-center py-[26.5px] px-[31px] z-[1]">
                    <b
                        className="relative tracking-[-0.02em] leading-[40px] inline-block min-w-[38px] mq450:text-4xl mq450:leading-[21px] mq800:text-12xl mq800:leading-[30px]"
                        style={progressBarSetStyle}
                    >
                        {imageGallery}
                    </b>
                </div>
            </div>
            <img
                className="h-[436px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[283px] min-h-[436px]"
                src={imageillustration}
                alt=""
            />

            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border min-w-[285px] min-h-[374px] max-w-full text-blue-700 mq450:pb-[36px] mq450:box-border" style={{}}>
                <div className="self-stretch [filter:drop-shadow(0px_10px_14.2px_rgba(0,_0,_0,_0.06))] rounded-xl flex flex-row items-start justify-start max-w-full" style={cardComponentStyle}>
                    <div className="flex-1 flex flex-col items-start justify-start p-5 box-border gap-[20px] max-w-full">
                        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]" style={vehicleValuationStyle}>
                            {vehicleValuationVerificat}
                        </h1>
                        <div className="self-stretch relative text-xl leading-[130%] text-green-900 mq450:text-base mq450:leading-[21px]">
                            {enjoyPeaceOfMindWithBlock}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBarSet;
