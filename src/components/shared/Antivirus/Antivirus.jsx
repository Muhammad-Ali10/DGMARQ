import ProductSection from '@/components/Custom/ProductSection'

const Antivirus = () => {

    const product = [
        "../../../assets/images/BestSeller1.png",
        "../../../assets/images/BestSeller2.png",
        "../../../assets/images/BestSeller3.png",
        "../../../assets/images/BestSeller4.png",
        "../../../assets/images/BestSeller5.png",
        "../../../assets/images/BestSeller6.png",
        
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