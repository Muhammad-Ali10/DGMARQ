import ProductSection from '@/components/Custom/ProductSection'


const UpcomingGames = () => {

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
            <h3 className="font-poppins font-semibold text-4xl -tracking-tight text-center text-white">New and upcoming releases</h3>
            <img src="/images/banner.png" className="max-w-1260 w-full rounded-21 m-auto" />
            
            <ProductSection productimage={product} title="Upcoming games" description="Can’t wait to play your game? Preorder the key now and experience it on day one!" />
        </>
    )
}

export default UpcomingGames