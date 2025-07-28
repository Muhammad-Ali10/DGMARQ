import FlashDealCard from "@/components/Custom/FlashDealCard"
import TrendingOffer from "@/components/shared/TrendingOffer/TrendingOffer"
const FlashDeal = ({ displayDirection }) => {


    return (
        <div className={`flex flex-col  lg:flex-row  md:px-0 justify-center items-center max-w-1260 w-full gap-6 pt-11`} id="FlashDeal" >

            {<FlashDealCard />}
            <TrendingOffer gridNumber="grid-cols-2" />
        </div>
    )
}
export default FlashDeal