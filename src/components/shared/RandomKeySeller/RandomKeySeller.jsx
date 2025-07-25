import ProductSection from '@/components/Custom/ProductSection'

const RandomKeySeller = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app//RandomKey.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey1.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey2.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey3.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey4.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey5.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey6.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey.png"
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