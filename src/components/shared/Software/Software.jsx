import ProductSection from '@/components/Custom/ProductSection'


const Software = () => {
 
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
            <ProductSection productimage={product} title="Software" description="From operating systems and VPNs to graphic design apps and more -all you need in one location!" />
        </>
    )
}

export default Software