import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useUpcommingGamesQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button';

const UpcomingGames = () => {


    const { data, isPending, error } = useUpcommingGamesQuery(1, 6);

    const upcoming = data?.data || [];

    const isSkeleton = isPending || upcoming.length === 0;
    const skeletonArray = Array.from({ length: 6 });



    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6 " id="upcoming-games">

            <h3 className="font-poppins font-semibold text-4xl -tracking-tight text-center text-white mt-9">New and upcoming releases</h3>

            {data && <img src={upcoming[2]?.banner} className="max-w-1260 w-full rounded-21 m-auto mt-9" />}
            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Upcoming games</h3>
                <p className="text-base font-normal -tracking-tight text-center">Can’t wait to play your game? Preorder the key now and experience it on day one!</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : (
                    upcoming.map((product) => (
                        <ProductSection key={product._id} data={product.productId} />
                    ))
                )}

            </div>

            <Button className="text-base font-normal font-poppins tracking-tight text-[#F05F00] bg-[#F05F00]/10 border border-[#F05F00]">
                Show More
            </Button>
        </div>
    )
}

export default UpcomingGames