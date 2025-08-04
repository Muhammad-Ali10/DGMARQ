import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useBestSellerQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button'; 

const BestSeller = () => {
    const { data, isPending, error } = useBestSellerQuery(1, 6);

    const bestSellers = data?.data || [];

    const isSkeleton = isPending || bestSellers.length === 0;
    const skeletonArray = Array.from({ length: 6 });


    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6 " id="bestSellers">
            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Seller</h3>
                <p className="text-base font-normal -tracking-tight text-center">The hottest items on our marketplace – discover what captured our users' hearts!</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : (
                    bestSellers.map((product) => (
                        <ProductSection key={product._id} data={product.productDetails} />
                    ))
                )}

            </div>
 
            <Button className="text-base font-normal font-poppins tracking-tight text-[#F05F00] bg-[#F05F00]/10 border border-[#F05F00]">
                Show More
            </Button>
        </div>
    );
};

export default BestSeller;
