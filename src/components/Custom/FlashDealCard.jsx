
import { ShoppingCart } from 'lucide-react';

const FlashDealCard = () => {
    return (
        <div className="w-full max-w-[454px] h-auto bg-primary rounded-21 p-5 flex flex-col gap-3.5  flex-shrink-0">
            <h2 className="text-2xl font-bold font-poppins text-center text-white">Flash Deal</h2>

            <div className="flex justify-between items-center">
                <div className="w-[90px] h-[78px] bg-white/10 text-white px-1 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold font-poppins">02</div>
                    <div className="text-sm font-poppins font-normal tracking-tight">Hours</div>
                </div>

                <div className="text-white text-2xl sm:text-4xl font-bold">:</div>

                <div className="w-[90px] h-[78px] bg-white/10 px-1 text-white  flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold font-poppins">15</div>
                    <div className="text-sm font-poppins font-normal tracking-tight">Minutes</div>
                </div>

                <div className="text-white text-2xl sm:text-4xl font-bold">:</div>

                <div className="w-[90px] h-[78px] bg-white/10 px-1 text-white  flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold font-poppins">25</div>
                    <div className="text-sm font-poppins font-normal tracking-tight">Seconds</div>
                </div>
            </div>


            <div className="flex  flex-col justify-center items-center w-full">
                <div className="max-w-[308px]">
                    <img src="../../../assets/images/flashdeal.png" alt="Steam Logo" className="w-full  h-[169px] object-contain z-0" />
                    <div className="text-base font-normal font-poppins flex flex-col -mt-12 ml-2.5 absolute z-50 text-white rounded-lg bg-primary w-[99px] h-[70px] px-3.5 py-1">
                        Save <span className="text-2xl font-bold font-poppins text-center">$ 1.54</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-6 text-white font-poppins">
                <h3 className="text-[22px] leading-[26px] font-semibold ">
                    Random PREMIUM 5 Keys Steam Key GLOBAL
                </h3>
                <div className="flex justify-between items-center mt-1">
                    <div className="text-white text-sm font-normal">
                        Left: <span className="font-bold">0</span>
                    </div>
                    <div className="bg-orange text-white px-4 py-2 rounded-21 border-[#D55603] border">
                        Sold 50
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-4 bg-white/10 text-center font-poppins p-3">
                <div className="text-white text-2xl font-semibold ">
                    $ 1.53
                </div>
                <del className="text-white/60 text-xs font-normal p-3 ">$ 3.07</del>

            </div>
            <button className="w-full bg-orange flex items-center justify-center gap-2 p-3 rounded-21 border border-[#D55603] text-white font-medium font-poppins">
                <ShoppingCart />
                Buy Now
            </button>
        </div>
    )
}

export default FlashDealCard