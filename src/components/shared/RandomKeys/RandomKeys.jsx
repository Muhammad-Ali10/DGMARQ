import ProductSection from '@/components/Custom/ProductSection'

const RandomKeys = () => {

    const product = [
        "./images/BestSeller1.png",
        "./images/BestSeller2.png",
        "./images/BestSeller3.png",
        "./images/BestSeller4.png",
        "./images/BestSeller5.png",
        "./images/BestSeller6.png",
    ]
    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product}  title="Random Keys" id="random-keys" description="Wondering what kind of gaming treasures are packed inside? Only one way to find out!" />
        </>
    )
}

export default RandomKeys