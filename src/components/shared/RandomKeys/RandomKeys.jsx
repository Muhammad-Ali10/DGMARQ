import ProductSection from '@/components/Custom/ProductSection'

const RandomKeys = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app//BestSeller1.png",
        "https://dgmarq-z9uy.vercel.app//BestSeller2.png",
        "https://dgmarq-z9uy.vercel.app//BestSeller3.png",
        "https://dgmarq-z9uy.vercel.app//BestSeller4.png",
        "https://dgmarq-z9uy.vercel.app//BestSeller5.png",
        "https://dgmarq-z9uy.vercel.app//BestSeller6.png",
    ]
    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product}  title="Random Keys" description="Wondering what kind of gaming treasures are packed inside? Only one way to find out!" />
        </>
    )
}

export default RandomKeys