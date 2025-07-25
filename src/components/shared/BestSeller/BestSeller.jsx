import ProductSection from '@/components/Custom/ProductSection'


const BestSeller = ({ product }) => {
    const productimage = [
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
            <ProductSection productimage={product? product : productimage} title="Best sellers" description="The hottest items on our marketplace – discover what captured our users' hearts!" />
        </>
    )
} 

export default BestSeller