import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useProductByKeyQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button';

const BestSeller = () => {
    const { data, isPending, error } = useProductByKeyQuery(1, 6);

    const TopGames = data?.data || [];

    const isSkeleton = isPending || TopGames.length === 0;
    const skeletonArray = Array.from({ length: 6 });


    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6 ">
            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center capitalize">Top up your gaming account</h3>
                <p className="text-base font-normal -tracking-tight text-center">Add some funds in a flash and enjoy new games, DLC, and more!</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : (
                    TopGames.map((product) => (

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

export default BestSeller;
