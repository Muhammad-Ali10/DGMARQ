import ProductSection from '@/components/Custom/ProductSection'

const Antivirus = () => {

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
            <ProductSection productimage={product}  title="Antivirus and security" description="Keep your devices safe and sound with our selection of security solutions." />
        </>
    )
}

export default Antivirus