import ProductCardVertical from "@/components/Custom/ProductCardVertical"

const TrendingOffer = ({gridNumber}) => {


    return (
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
            <h3 className="text-26 -tracking-tight font-semibold  text-white">More currently trending offers</h3>
            <p className="text-base font-normal -tracking-tight  text-white mb-4">Don't miss out – grab them while you still have the chance!</p>
            <div className={`grid  grid-cols-1 md:${gridNumber} gap-5 justify-center`}>
                {Array(6).fill().map((_, index) =>
                    <ProductCardVertical key={index} productimage="./images/trandingimage.png" />
                )}
            </div>
        </div>
    )
}
export default TrendingOffer