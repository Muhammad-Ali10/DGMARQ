// components/shop/ProductList.jsx
import React from "react";
import { Card} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCardHorizontal, GiftCard } from "@/components"


const ProductList = ({ products, layout, loading }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="p-4 space-y-3">
                        <Skeleton className="h-40 w-full rounded-md" />
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-4 w-1/3" />
                    </Card>
                ))}
            </div>
        );
    }

    if (!products.length) {
        return <p className="text-muted-foreground">No products found.</p>;
    }

    return layout === "listing" ? (
        <div className="space-y-4">
            {products.map((item,index) => (
                <GiftCard key={index}
                    url={`/product-details/${item?._id}`}
                    image={item?.images?.[0]}
                    title={item?.title}
                    discount={3}
                    price={item?.discountPrice}
                    originalPrice={item?.actualPrice} />
            ))}
        </div>
    ) : ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item,index) => (
                <ProductCardHorizontal
                    key={index}
                    url={`/product-details/${item?._id}`}
                    image={item?.images?.[0]}
                    title={item?.title}
                    discount={3}
                    price={item?.discountPrice}
                    originalPrice={item?.actualPrice}
                />
            ))}
        </div>
    );
};

export default ProductList;
