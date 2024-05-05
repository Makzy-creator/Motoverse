import ProgressBarSet from "./ProgressBarSet"

const HowItWorks = () => {
    return (
        <section className="self-stretch bg-white-50 overflow-hidden flex flex-col items-start justify-start py-[120px] px-[120px] box-border max-w-full text-left text-20xl text-green-900 font-manrope mq450:py-[33px] mq450:px-5 mq450:box-border mq1125:pt-[51px] mq1125:pb-[51px] mq1125:box-border mq800:gap-[23px] mq800:pl-[98px] mq800:pr-[98px] mq800:box-border mq1350:pt-[78px] mq1350:pb-[78px] mq1350:box-border">
            <div className="w-[1048px]">
                    <h1 className="m-0 w-[1048px] relative leading-[47px] text-inherit font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                        How it works
                    </h1>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.1px] max-w-full font-karla">

                        <ProgressBarSet
                            imageGallery="01 "
                            imageillustration="/images/Vehiclevaluation.svg"
                            vehicleValuationVerificat={`Vehicle Valuation & Verification`}
                            enjoyPeaceOfMindWithBlock="Upload your car to the marketplace by submitting your vehicle for a quick verification covering legal, mechanical, and aesthetic aspects. Set your price based on our suggested valuation or choose your own."
                            propBoxShadow="0px 10px 14.2px rgba(0, 0, 0, 0.05)"
                            propPadding="0px 2px 0px 0px"
                        />

                        <ProgressBarSet
                            imageGallery="02"
                            imageillustration="/images/Escrow.svg"
                            vehicleValuationVerificat="Escrow Creation"
                            enjoyPeaceOfMindWithBlock="Buyers show interest through a secure escrow smart contract, ensuring safe transaction terms."
                            propPadding="0px 2px 0px 0px"
                            propMinHeight="311px"
                            propPadding1="0px 0px 126px"
                            propFilter="unset"
                            propBoxShadow="0px 10px 14.2px rgba(0, 0, 0, 0.05)"
                            propOverflow="unset"
                            propLineHeight="47px"
                         />

                        <ProgressBarSet
                            imageGallery="03 "
                            imageillustration="/images/closeandcollect.svg"
                            vehicleValuationVerificat={`Close & Collect`}
                            enjoyPeaceOfMindWithBlock="We handle the paperwork and delivery. Once everything's finalized, receive your payment seamlessly and securely."
                            propPadding="unset"
                            // propMinWidth="48px"
                            propMinHeight="unset"
                            propPadding1="126.1px 0px 0px"
                            propFilter="unset"
                            propBoxShadow="0px 10px 14.2px rgba(0, 0, 0, 0.05)"
                            propOverflow="hidden"
                            propLineHeight="47px"
                            />
                    </div>

            </div>
            
        </section>
    );
};

export default HowItWorks;
