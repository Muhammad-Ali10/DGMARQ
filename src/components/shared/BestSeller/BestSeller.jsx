import ProductSection from '@/components/Custom/ProductSection'


const BestSeller = ({ product }) => {
    const productimage = [
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
            <ProductSection productimage={product? product : productimage} title="Best sellers" description="The hottest items on our marketplace – discover what captured our users' hearts!" />
        </>
    )
} 

export default BestSeller