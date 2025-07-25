import ProductSection from '@/components/Custom/ProductSection'

const RandomKeySeller = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app/images/RandomKey.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey2.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey3.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey4.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey5.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey6.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey.png"
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Try to catch one of our bestsellers!" description="No surprises here, just the very best digital offers available on our marketplace." />
        </>
    )
}

export default RandomKeySeller