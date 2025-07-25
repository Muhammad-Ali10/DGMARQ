    import ProductSection from '@/components/Custom/ProductSection'

const FavoriteItems = () => {
/* const { isPending, error, data } = useQuery({
        queryKey: ['BestSeller'],
        queryFn: () => BestSellerApi(1, 6)
    })

    const newFavorites = data?.data || [];

  console.log(data)*/
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
            <ProductSection productimage={product}  title="Our customers' favorite items" description="Gift cards, gaming NFTs, and other digital goodies for all the cryptocurrency enthusiasts." />
        </>
    )
}

export default FavoriteItems