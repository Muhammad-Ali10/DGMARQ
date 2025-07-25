import ProductSection from '@/components/Custom/ProductSection'

const FiveKeys = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey10.png",
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