import ProductSection from '@/components/Custom/ProductSection'


const ThreeKeys = () => {

    const product = [
        "/images/RandomKey10.png",
        "/images/RandomKey8.png",
        "/images/RandomKey10.png",
        "/images/RandomKey9.png",
        "/images/RandomKey8.png",
        "/images/RandomKey10.png",
        "/images/RandomKey10.png",
        "/images/RandomKey8.png",
        "/images/RandomKey10.png",
        "/images/RandomKey9.png",
        "/images/RandomKey8.png",
        "/images/RandomKey10.png",
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Up For A Smaller Set? Get 3 Keys!   " description="Same as before, overflowing with mystery - let's see what's inside!" />
        </>
    )
}

export default ThreeKeys