import {
    RandomKeySeller,
    Champions,
    SingleKeys,
    FiveKeys,
    ThreeKeys,
    Fortnite,
    TwoKeys
} from "@/components";



const RandomKeys = () => {
    return (
        <div className="flex flex-col max-w-1440 bg-blue items-center justify-center gap-12 m-auto pt-12">
            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Software</h3>
                <p className="text-base font-normal -tracking-tight text-center">For Home and Business</p>
            </div>
            <img src="https://dgmarq-z9uy.vercel.app/images/RandomKeybanner.png" alt="offerimage" className="max-w-1260 w-full mt-12" />
            <RandomKeySeller />
            <Champions/>
            <FiveKeys/>
            <SingleKeys/>
            <ThreeKeys/>
            <Fortnite/>
            <TwoKeys/>
        </div>
    )
}

export default RandomKeys