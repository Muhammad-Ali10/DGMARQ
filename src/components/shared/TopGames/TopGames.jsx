import ProductSection from '@/components/Custom/ProductSection'


const TopGames = () => {

    const product = [
        "/images/BestSeller1.png",
        "/images/BestSeller2.png",
        "/images/BestSeller3.png",
        "/images/BestSeller4.png",
        "/images/BestSeller5.png",
        "/images/BestSeller6.png",
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