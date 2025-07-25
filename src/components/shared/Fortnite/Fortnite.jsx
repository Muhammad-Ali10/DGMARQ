import ProductSection from '@/components/Custom/ProductSection'

const Fortnite = () => {

    const product = [
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller3.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller4.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey9.png",
        "https://dgmarq-z9uy.vercel.app/images/RandomKey8.png",
    ]
    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Style Up For Roblox And Fortnite!" description="This section is packed with awesome items for these two popular games - let's see what you'll get!" />
        </>
    )
}

export default Fortnite