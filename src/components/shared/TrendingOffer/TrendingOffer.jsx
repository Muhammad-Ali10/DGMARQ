import React, { useMemo } from "react";
import ProductCardVertical from "@/components/Custom/ProductCardVertical"
import { useFlashDealsQuery } from "@/hooks/useHomeQuery";

const TrendingOffer = ({ displayImage, gridNumber }) => {

    const { data, isPending, isError } = useFlashDealsQuery();
    const DealProducts = data?.data || [];

    // ✅ Memoized approved product - only calculates when data changes
    const flashDealItem = useMemo(() => {
        return DealProducts.find(item => item.status === "approved");
    }, [DealProducts]);

    if (isPending || !flashDealItem) return null; // or show a loading skeleton

    return (
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
            <h3 className="text-26 -tracking-tight font-semibold  text-white">More currently trending offers</h3>
            <p className="text-base font-normal -tracking-tight  text-white mb-4">Don't miss out – grab them while you still have the chance!</p>

            <div className="flex flex-col  lg:flex-row md:px-0 justify-center items-center max-w-1260 w-full gap-6 pt-11" id="FlashDeal" >
                <div className={`grid grid-cols-1 md:grid-cols-${gridNumber} gap-5 justify-center`}>
                    {flashDealItem?.productId?.map((item, index) => (
                        <ProductCardVertical
                            key={item._id || index}
                            actualPrice={item.actualPrice}
                            discountPrice={item.discountPrice}
                            image={item?.images[0]}
                            title={item.title}
                        />
                    ))}
                </div>
                {displayImage && <img src="./images/offerimage.png" alt="offerimage" className="h-[500px]" />}
            </div>

        </div>
    )
}
export default TrendingOffer