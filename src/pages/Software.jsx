import {
    Antivirus,
    BestSeller,
    GraphicDesign,
    IosUtilities,
    TrendingOffer,
    Vpns
} from "@/components";


const SoftwarePage = () => {
    return (
        <div className="flex flex-col max-w-1440 bg-blue items-center justify-center gap-12 m-auto">
            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Software</h3>
                <p className="text-base font-normal -tracking-tight text-center">For Home and Business</p>
            </div>
            <TrendingOffer gridNumber="grid-cols-3" />
            <img src="./images/softwarebanner.png" alt="offerimage" className="max-w-1260 w-full" />
            <BestSeller />
            <Vpns />
            <IosUtilities />
            <GraphicDesign />
            <Antivirus />
        </div>
    )
}

export default SoftwarePage