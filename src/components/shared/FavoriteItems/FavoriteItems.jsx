
import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useWishlistQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button';

const FavoriteItems = () => {
    const { data, isPending, error } = useWishlistQuery(1, 6);

    const FavoritesProduct = data?.data || [];
    console.log(FavoritesProduct);

    const isSkeleton = isPending || FavoritesProduct.length === 0;
    const skeletonArray = Array.from({ length: 6 });


    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6 ">
            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Our customers' favorite items</h3>
                <p className="text-base font-normal -tracking-tight text-center">Gift cards, gaming NFTs, and other digital goodies for all the cryptocurrency enthusiasts.</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : (
                    FavoritesProduct.map((product) => (
                    <ProductSection key={product._id} data={product} />
                    ))
                )}

            </div>

            <Button className="text-base font-normal font-poppins tracking-tight text-[#F05F00] bg-[#F05F00]/10 border border-[#F05F00]">
                Show More
            </Button>
        </div>
    );
};

export default FavoriteItems;
