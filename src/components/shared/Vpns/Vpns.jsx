import ProductSection from '@/components/Custom/ProductSection'

const Vpns = () => {

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
            <ProductSection productimage={product}  title="VPNs" description="Make sure your connection and identity are protected from online threats." />
        </>
    )
}

export default Vpns