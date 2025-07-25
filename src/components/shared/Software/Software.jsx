import ProductSection from '@/components/Custom/ProductSection'


const Software = () => {
 
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
            <ProductSection productimage={product} title="Software" description="From operating systems and VPNs to graphic design apps and more -all you need in one location!" />
        </>
    )
}

export default Software