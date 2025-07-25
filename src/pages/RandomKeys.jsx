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
        <div className="flex flex-col bg-blue items-center justify-center gap-12 m-auto py-12 overflow-hidden">
            <img src="./images/LeftShedow.png" alt="shedow" className="absolute left-0 top-0 drop-shadow-2xl" />
            <img src="./images/RightShedow.png" alt="shedow" className="absolute right-0 top-0 drop-shadow-2xl" />
            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Software</h3>
                <p className="text-base font-normal -tracking-tight text-center">For Home and Business</p>
            </div>
            <img src="./images/RandomKeybanner.png" alt="offerimage" className="max-w-1260 w-full mt-12" />
            <div className="relative w-full flex flex-col items-center justify-center py-12 bg-blue m-auto">
                {/* Shadow images on top */}
                <img
                    src="/images/CenterShedow.png"
                    alt="shadow"
                    className="absolute -left-[35%] z-0  drop-shadow-2xl"
                />
                <img
                    src="/images/CenterShedow.png"
                    alt="shadow"
                    className="absolute -right-[35%] z-0  drop-shadow-2xl"
                />

                {/* Content rendered above shadows */}
                <div className="relative z-10 m-auto">
                    <RandomKeySeller />
                </div>
            </div>
            <Champions />
            <div className="relative w-full flex flex-col items-center justify-center py-12 bg-blue m-auto">
                {/* Shadow images on top */}

                <img
                    src="/images/CenterShedow.png"
                    alt="shadow"
                    className="absolute  z-0  drop-shadow-2xl"
                />

                {/* Content rendered above shadows */}
                <div className="relative z-10 m-auto">
                    <FiveKeys />
                </div>
            </div>

            <SingleKeys />

            <div className="relative w-full flex flex-col items-center justify-center py-12 bg-blue m-auto">
                {/* Shadow images on top */}
                <img
                    src="/images/CenterShedow.png"
                    alt="shadow"
                    className="absolute -left-[35%] z-0  drop-shadow-2xl"
                />
                <img
                    src="/images/CenterShedow.png"
                    alt="shadow"
                    className="absolute -right-[35%] z-0  drop-shadow-2xl"
                />

                {/* Content rendered above shadows */}
                <div className="relative z-10 m-auto">
                    <ThreeKeys />
                </div>
            </div>
            <Fortnite />

            <TwoKeys />
        </div>
    )
}

export default RandomKeys