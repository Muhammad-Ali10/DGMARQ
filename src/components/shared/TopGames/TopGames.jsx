import ProductSection from '@/components/Custom/ProductSection'


const TopGames = () => {

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
            <ProductSection productimage={product} title="Top up your gaming account" description="Add some funds in a flash and enjoy new games, DLC, and more!" />
        </>
    )
}

export default TopGames