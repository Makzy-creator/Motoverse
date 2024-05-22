const Card = ({
  imageillustration,
  secureTransactions,
  enjoyPeaceOfMindWithBlock,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-left text-green-900 font-karla shadow-[0px_10px_14.2px_rgba(0,_0,_0,_0.05)] bg-transparent w-[343px]">
      <img
        className="h-[254px] flex-1 relative self-stretch max-w-ful overflow-hidden max-h-full"
        loading="lazy"
        alt="Text"
        src={imageillustration}
      />
      <div className="self-stretch flex flex-col h-[193px] items-start justify-start p-[20px] gap-[20px]">
        <h3 className="m-0 w-[292px] text-6xl relative tracking-[-0.02em] font-bold font-inherit inline-block mq450:text-xl">
          {secureTransactions}
        </h3>
        <div className="self-stretch relative text-xl leading-[130%] mq450:text-base mq450:leading-[21px]">
          {enjoyPeaceOfMindWithBlock}
        </div>
      </div>
    </div>
  );
};

export default Card;
