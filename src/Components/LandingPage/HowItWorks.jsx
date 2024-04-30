import ProgressBarSet from "./ProgressBarSet"

const HowItWorks = () => {
    return (
        <section className="self-stretch bg-white-50 overflow-hidden flex flex-col items-start justify-start py-[120px] px-[197px] box-border gap-[47px] max-w-full text-left text-20xl text-green-900 font-manrope mq450:py-[33px] mq450:px-5 mq450:box-border mq1125:pt-[51px] mq1125:pb-[51px] mq1125:box-border mq800:gap-[23px] mq800:pl-[98px] mq800:pr-[98px] mq800:box-border mq1350:pt-[78px] mq1350:pb-[78px] mq1350:box-border">
            <h1 className="m-0 w-[954px] relative text-inherit leading-[47px] font-bold font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[28px] mq800:text-12xl mq800:leading-[37px]">
                How it works
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.1px] max-w-full font-karla">
                <ProgressBarSet
                    imageGallery="01 "
                    imageillustration="/imageillustration-2@2x.png"
                    vehicleValuationVerificat={`Vehicle Valuation & Verification`}
                    enjoyPeaceOfMindWithBlock="Upload your car to the marketplace by submitting your vehicle for a quick verification covering legal, mechanical, and aesthetic aspects. Set your price based on our suggested valuation or choose your own."
                />
                <ProgressBarSet
                    imageGallery="02"
                    imageillustration="/imageillustration-3@2x.png"
                    vehicleValuationVerificat="Escrow Creation"
                    enjoyPeaceOfMindWithBlock="Buyers show interest through a secure escrow smart contract, ensuring safe transaction terms."
                    propPadding="0px 2px 0px 0px"
                    propMinWidth="48px"
                    propMinHeight="311px"
                    propPadding1="0px 0px 126px"
                    propFilter="drop-shadow(0px 10px 14.2px rgba(0, 0, 0, 0.04))"
                    propBoxShadow="unset"
                    propOverflow="unset"
                    propLineHeight="47px"
                />
                <ProgressBarSet
                    imageGallery="03 "
                    imageillustration="/imageillustration-4@2x.png"
                    vehicleValuationVerificat={`Close & Collect`}
                    enjoyPeaceOfMindWithBlock="We handle the paperwork and delivery. Once everything's finalized, receive your payment seamlessly and securely."
                    propPadding="unset"
                    propMinWidth="48px"
                    propMinHeight="unset"
                    propPadding1="126.1px 0px 0px"
                    propFilter="unset"
                    propBoxShadow="0px 10px 14.2px rgba(0, 0, 0, 0.04)"
                    propOverflow="hidden"
                    propLineHeight="47px"
                />
            </div>
        </section>
    )
}

export default HowItWorks