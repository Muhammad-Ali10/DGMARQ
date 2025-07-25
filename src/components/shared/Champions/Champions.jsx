import ProductSection from '@/components/Custom/ProductSection'

const Champions = () => {

    const product = [
        "./images/RandomKey.png",
        "./images/RandomKey1.png",
        "./images/RandomKey.png",
        "./images/RandomKey1.png",
        "./images/RandomKey.png",
        "./images/RandomKey1.png",
        "./images/RandomKey2.png",
        "./images/RandomKey3.png",
        "./images/RandomKey4.png",
        "./images/RandomKey5.png",
        "./images/RandomKey6.png",
        "./images/RandomKey.png"
    ]

    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="Meet the champions!" description="No surprises here, just the very best digital offers available on our marketplace." />
        </>
    )
}

export default Champions