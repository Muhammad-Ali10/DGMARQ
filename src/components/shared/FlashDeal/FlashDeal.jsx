import FlashDealCard from "@/components/Custom/FlashDealCard"
import TrendingOffer from "@/components/shared/TrendingOffer/TrendingOffer"
const FlashDeal = ({ displayImage, displayDirection }) => {


    return (
        <div className={`flex flex-col  md:${displayDirection} px-4 md:px-0 justify-center items-center max-w-1260 w-full gap-6 pt-11`}>

            {displayImage ? <img src="https://dgmarq-z9uy.vercel.app/images/offerimage.png" alt="offerimage" className="h-[500px]" /> : <FlashDealCard />}
            <TrendingOffer gridNumber="grid-cols-2" />
        </div>
    )
}
export default FlashDeal