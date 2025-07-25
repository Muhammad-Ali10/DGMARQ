import ProductSection from '@/components/Custom/ProductSection'

const FiveKeys = () => {

    const product = [
        "/images/RandomKey8.png",
        "/images/RandomKey8.png",
        "/images/RandomKey9.png",
        "/images/RandomKey9.png",
        "/images/RandomKey10.png",
        "/images/RandomKey10.png",
        "/images/RandomKey8.png",
        "/images/RandomKey8.png",
        "/images/RandomKey9.png",
        "/images/RandomKey9.png",
        "/images/RandomKey10.png",
        "/images/RandomKey10.png",
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="How About 5 Keys?" description="Think of 5 amazing adventures just waiting to be unwrapped! Aren't you curious what's inside?" />
        </>
    )
}

export default FiveKeys