import ProductSection from '@/components/Custom/ProductSection'


const TwoKeys = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app/images/RandomKey11.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey13.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey13.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey11.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey13.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey13.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey11.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey14.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey11.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey13.png",
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Up For A Smaller Set? Get 3 Keys!" description="Same as before, overflowing with mystery - let's see what's inside!" />
        </>
    )
}

export default TwoKeys