import ProductSection from '@/components/Custom/ProductSection'


const SingleKeys = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app//RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey10.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app//RandomKey10.png",
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Single Random Are Pretty Tool!" description="If one game's enough, choose one of these - you'll be surprised what kind of gems can be found here!" />
        </>
    )
}

export default SingleKeys