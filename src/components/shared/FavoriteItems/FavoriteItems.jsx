    import ProductSection from '@/components/Custom/ProductSection'

const FavoriteItems = () => {
/* const { isPending, error, data } = useQuery({
        queryKey: ['BestSeller'],
        queryFn: () => BestSellerApi(1, 6)
    })

    const newFavorites = data?.data || [];

  console.log(data)*/
    const product = [
        "https://dgmarq-z9uy.vercel.app/images/BestSeller1.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller2.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller3.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller4.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller5.png",
        "https://dgmarq-z9uy.vercel.app/images/BestSeller6.png",
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