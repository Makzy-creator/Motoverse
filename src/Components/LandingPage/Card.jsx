
const Card = ({
    imageillustration,
    secureTransactions,
    enjoyPeaceOfMindWithBlock
}) => {
    return (
        <div className="h-[447px] w-[343px] shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.04)] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-left text-6xl text-green-900 font-karla">

            <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src={imageillustration}
            />
             <div className="self-stretch flex flex-col items-start justify-start p-5 gap-[20px]">
                <h3 className="m-0 w-[292px] relative text-inherit tracking-[-0.02em] font-bold font-inherit inline-block mq450:text-xl">
                    {secureTransactions}
                </h3>
                <div className="self-stretch relative text-xl leading-[130%] mq450:text-base mq450:leading-[21px]">
                    {enjoyPeaceOfMindWithBlock}
                </div>
            </div>

        </div>
    );
}

export default Card