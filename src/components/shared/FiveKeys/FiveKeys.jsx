import ProductSection from '@/components/Custom/ProductSection'

const FiveKeys = () => {

    const product = [
        "../../../assets/images/RandomKey8.png",
        "../../../assets/images/RandomKey8.png",
        "../../../assets/images/RandomKey9.png",
        "../../../assets/images/RandomKey9.png",
        "../../../assets/images/RandomKey10.png",
        "../../../assets/images/RandomKey10.png",
        "../../../assets/images/RandomKey8.png",
        "../../../assets/images/RandomKey8.png",
        "../../../assets/images/RandomKey9.png",
        "../../../assets/images/RandomKey9.png",
        "../../../assets/images/RandomKey10.png",
        "../../../assets/images/RandomKey10.png",
    ]


    return (
        <>
            {/*isPending && <div>Loading...</div>*/}
            {/*queryKey="BestSeller"
                queryFn={() => BestSellerApi(1, 6)}*/}
            <ProductSection productimage={product} title="How About 5 Keys?" description="Think of 5 amazing adventures just waiting to be unwrapped! Aren't you curious what's inside?" />
        </>
    )
}

export default FiveKeys