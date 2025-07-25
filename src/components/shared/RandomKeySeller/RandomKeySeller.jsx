import ProductSection from '@/components/Custom/ProductSection'

const RandomKeySeller = () => {

    const product = [
        "../../../assets/images/RandomKey.png",
        "../../../assets/images/RandomKey1.png",
        "../../../assets/images/RandomKey.png",
        "../../../assets/images/RandomKey1.png",
        "../../../assets/images/RandomKey.png",
        "../../../assets/images/RandomKey1.png",
        "../../../assets/images/RandomKey2.png",
        "../../../assets/images/RandomKey3.png",
        "../../../assets/images/RandomKey4.png",
        "../../../assets/images/RandomKey5.png",
        "../../../assets/images/RandomKey6.png",
        "../../../assets/images/RandomKey.png"
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