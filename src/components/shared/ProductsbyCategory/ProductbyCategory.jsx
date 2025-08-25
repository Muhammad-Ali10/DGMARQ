import React, { useMemo } from 'react';
import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useCategoryQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button';

const ProductbyCategory = ({ brandName, page, limit }) => {
    const { data, isPending, error } = useCategoryQuery(1, 6);

    

    const categoryProducts = data?.data || [];

    // Efficient filtering using useMemo
    const softwareProducts = useMemo(() => {

        return categoryProducts.filter((item) => {
            return (item.brandName === brandName)
        });
    }, [categoryProducts]);

    // Skeleton loading condition
    const isSkeleton = isPending || softwareProducts.length === 0;
    const skeletonArray = Array.from({ length: 6 });

    return (
        <section
            className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6"
            aria-labelledby="software-heading"
        >
            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h2 id="software-heading" className="text-4xl font-semibold text-center">
                    {softwareProducts.length > 0 ? softwareProducts[0]?.brandName : ""}
                </h2>
                <p className="text-base font-normal text-center">
                    The hottest items on our marketplace – discover what captured our users' hearts!
                </p>
            </div>

            {/* Products Grid */}
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : softwareProducts.length > 0 ? (
                    softwareProducts[0]?.products?.map(product => (
                        <ProductSection key={product._id} data={product} />
                    ))
                ) : (
                    <p className="text-white text-center col-span-full">
                        No Software Products Found.
                    </p>
                )}
            </div>

            {/* Show More Button */}
            <Button
                className="text-base font-normal font-poppins tracking-tight text-[#F05F00] bg-[#F05F00]/10 border border-[#F05F00]"
                onClick={() => {
                    // Add pagination logic here in future
                }}
            >
                Show More
            </Button>

            {/* Optional error handling */}
            {error && (
                <p className="text-red-500 font-medium text-center mt-4">
                    Failed to load software products. Please try again.
                </p>
            )}
        </section>
    );
};

export default ProductbyCategory;
