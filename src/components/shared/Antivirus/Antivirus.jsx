import ProductSection from '@/components/Custom/ProductSection'

const Antivirus = () => {

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
            <ProductSection productimage={product}  title="Antivirus and security" description="Keep your devices safe and sound with our selection of security solutions." />
        </>
    )
}

export default Antivirus